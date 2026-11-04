#!/usr/bin/env python3
"""Build the narration DOCX and Markdown from course.json; sync browser data.
Requires python-docx; no network.
"""
from pathlib import Path
from docx import Document
from docx.shared import Inches,Pt,RGBColor
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from sync_content import sync
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT.parent
D=sync()

def mm(seconds):return f'{seconds//60:02d}:{seconds%60:02d}'

def fontstyle(style,size,bold=False):
    style.font.name='Heiti SC';style.font.size=Pt(size);style.font.bold=bold;style.font.color.rgb=RGBColor(0,0,0)
    rpr=style.element.get_or_add_rPr();f=rpr.find(qn('w:rFonts'))
    if f is None:f=OxmlElement('w:rFonts');rpr.append(f)
    for key in ['ascii','hAnsi','eastAsia','cs']:f.set(qn('w:'+key),'Heiti SC')
    style.paragraph_format.space_after=Pt(5)
    style.paragraph_format.space_before=Pt(0)
    style.paragraph_format.line_spacing=Pt(size*1.35)
    style.font.italic=False
    for attr in list(f.attrib):
        if 'theme' in attr.lower():del f.attrib[attr]
    for b in list(style.element.xpath('.//w:pBdr')):b.getparent().remove(b)

def docbase(title):
    doc=Document();sec=doc.sections[0];sec.page_width=Inches(8.5);sec.page_height=Inches(11)
    sec.top_margin=Inches(.65);sec.bottom_margin=Inches(.65);sec.left_margin=Inches(.7);sec.right_margin=Inches(.7)
    fontstyle(doc.styles['Normal'],12)
    doc.styles['Normal'].paragraph_format.line_spacing=Pt(17)
    fontstyle(doc.styles['Title'],27,True);fontstyle(doc.styles['Heading 1'],18,True);fontstyle(doc.styles['Heading 2'],12,True)
    fontstyle(doc.styles['Caption'],10);doc.styles['Caption'].paragraph_format.line_spacing=Pt(13)
    for style, space in [('Heading 1', 14), ('Heading 2', 9)]:
        doc.styles[style].paragraph_format.keep_with_next = True
        doc.styles[style].paragraph_format.space_before = Pt(space)
    doc.core_properties.title=title;doc.core_properties.subject='从零认识 AI Infra 视频课程';doc.core_properties.author=''
    foot=sec.footer.paragraphs[0];foot.alignment=2
    field = OxmlElement('w:fldSimple')
    field.set(qn('w:instr'), 'PAGE')
    field.append(foot.add_run('1')._r)
    foot._p.append(field)
    doc.add_paragraph(title,'Title')
    doc.add_paragraph('推理请求背后的计算 缓存与服务','Subtitle')
    fontstyle(doc.styles['Subtitle'],14)
    doc.add_paragraph('本课程面向有基本计算机知识、尚不了解 AI Infra 的观众。课程先介绍 GPU、计算软件和模型训练，再用一次聊天请求说明推理服务怎样安排计算、管理缓存和返回结果。')
    total=sum(p['estimatedSeconds'] for p in D['slides'])
    states=sum(len(p['steps']) for p in D['slides'])
    doc.add_paragraph(f'共 {len(D["chapters"])} 章 {len(D["slides"])} 页 {states} 个教学状态。预计录制时长 {mm(total)}。估算包含口播和图示停顿，实际时长以试读为准。')
    doc.add_paragraph('使用方式','Heading 1')
    doc.add_paragraph('打开 HTML 课件即可看字幕朗读。每页从 .0 开始，读完一句按一次 Space。读完页末一句后再按 Space，直接进入下一页的第一句。')
    doc.add_paragraph('每条台词上方是状态编号和画面提示。稿件按朗读顺序排列，编号可用于补录定位。Backspace 回到上一句，R 重播当前动作，P 暂停或继续动画。')
    doc.add_paragraph('章节与预计时长','Heading 1')
    for i,ch in enumerate(D['chapters'],1):
        pages=[p for p in D['slides'] if p['chapter']==i]
        page_range=pages[0]['id']
        if len(pages)>1:
            page_range+=f' 至 {pages[-1]["id"]}'
        doc.add_paragraph(f'{i}  {ch}    {page_range}    {mm(sum(p["estimatedSeconds"] for p in pages))}')
    return doc

script = docbase('从零认识 AI Infra 完整口播稿')
for index, chapter in enumerate(D['chapters'], 1):
    chapter_heading = script.add_paragraph(f'第 {index} 章  {chapter}', 'Heading 1')
    chapter_heading.paragraph_format.page_break_before = index == 1
    for slide in D['slides']:
        if slide['chapter'] != index:
            continue
        script.add_paragraph(f'{slide["id"]}  {slide["title"]}', 'Heading 2')
        for beat in slide['steps']:
            cue = script.add_paragraph(f'{beat["id"]}  {beat["label"]}', 'Caption')
            cue.paragraph_format.keep_with_next = True
            cue.paragraph_format.space_before = Pt(4)
            cue.paragraph_format.space_after = Pt(1)
            line = script.add_paragraph(beat['narration'])
            line.paragraph_format.keep_together = True
script.save(OUT / 'AI_Infra_完整口播稿.docx')

md = [
    '# 从零认识 AI Infra 完整口播稿', '',
    '每页第一句随画面显示。读完一句按 Space，页末也用 Space 进入下一页。稿件按朗读顺序排列，状态编号可用于补录定位。', '',
    '正文由 course.json 导出，与课件字幕一致。', '',
]
for slide in D['slides']:
    md += [f'## {slide["id"]} {slide["title"]}', '', f'预计 {mm(slide["estimatedSeconds"])}', '']
    for beat in slide['steps']:
        md += [f'### {beat["id"]} {beat["label"]}', '', beat['narration'], '']
(ROOT / 'content/口播稿.md').write_text('\n'.join(md), encoding='utf-8')
print('Built narration DOCX and Markdown. Total', mm(sum(slide['estimatedSeconds'] for slide in D['slides'])))
