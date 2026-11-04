#!/usr/bin/env python3
"""Verify the narration exports and offline browser payload against course.json."""
import json
import re

from docx import Document
from sync_content import ROOT, browser_payload, load_course

data = load_course()
slides_by_id = {slide['id']: slide for slide in data['slides']}
opening = slides_by_id['S01']['demo']
dinner = slides_by_id['S29']['demo']
assert opening['otherQuestions'][int(dinner['id']) - 2] == dinner['question']
assert ''.join(dinner['inputTokens']) == dinner['question']
steps = [step for slide in data['slides'] for step in slide['steps']]
document = Document(ROOT.parent / 'AI_Infra_完整口播稿.docx')
exports = {
    'Word': [paragraph.text for paragraph in document.paragraphs],
    'Markdown': (ROOT / 'content/口播稿.md').read_text(encoding='utf-8').splitlines(),
}
for name, lines in exports.items():
    lines = [line for line in lines if line.strip()]
    prefix = '' if name == 'Word' else '#### '
    heading_pattern = rf'^{prefix}\d{{3,}} · S\d{{2}}\.\d+ '
    actual = [(line, lines[i + 1]) for i, line in enumerate(lines) if re.match(heading_pattern, line)]
    expected = [
        (f'{prefix}{number:03d} · {step["id"]} {step["label"]}', step['narration'])
        for number, step in enumerate(steps, 1)
    ]
    assert actual == expected, f'{name} narration or cue order differs from course.json'

glossary = json.loads((ROOT / 'content/glossary.json').read_text(encoding='utf-8'))
names = {entry['name'] for entry in glossary}
assert len(names) == len(glossary)
assert all(term in names for slide in data['slides'] for term in slide['terms'])
assert all(key in data['references'] for entry in glossary for key in entry['sources'])
assert (ROOT / 'assets/course-data.js').read_text(encoding='utf-8') == browser_payload(data)
print(f'PASS: {len(data["slides"])} scenes, {len(steps)} cues, Word and Markdown exports, glossary and browser payload')
