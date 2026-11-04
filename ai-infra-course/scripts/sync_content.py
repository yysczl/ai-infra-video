#!/usr/bin/env python3
"""Check the editable course data and sync the offline browser payload."""
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]


def load_course():
    data = json.loads((ROOT / 'content/course.json').read_text(encoding='utf-8'))
    assert len(data['chapters']) == 6
    slides = data['slides']
    slide_ids = [slide['id'] for slide in slides]
    assert sorted(slide_ids) == [f'S{i:02d}' for i in range(1, len(slides) + 1)]
    chapters = [slide['chapter'] for slide in slides]
    assert chapters == sorted(chapters) and set(chapters) == set(range(1, 7))
    for slide in slides:
        sid = slide['id']
        assert all(key in data['references'] for key in slide['sources'])
        steps = slide['steps']
        ids = [step['id'] for step in steps]
        assert set(ids) == {f'{sid}.{j}' for j in range(len(ids))}, sid
        assert len(steps) >= 4 and ids[0] == f'{sid}.0', sid
        if slide['kind'] == 'extension':
            assert ids == [f'{sid}.{j}' for j in range(len(ids))], sid
        assert slide['estimatedSeconds'] == sum(step['estimatedSeconds'] for step in steps)
        previous_frame = 0
        for step in steps:
            number = int(step['id'].split('.')[1])
            lines = step['narration'].split('\n')
            assert all(line.strip() for line in lines), step['id']
            narration = ''.join(lines)
            assert narration == narration.strip() and re.search(r'[。？！][”」]?$', narration), step['id']
            assert not re.search(r'\n|\r|［|S\d{2}[./]\d+|TODO|待补充|占位', narration), step['id']
            step['narration'] = narration
            step['captions'] = [line.strip() for line in lines]
            assert step['label'].strip() and 'leadIn' not in step and 'trigger' not in step, step['id']
            assert isinstance(step['estimatedSeconds'], int) and step['estimatedSeconds'] > 0, step['id']
            frame = step.get('frame', number)
            assert previous_frame <= frame, step['id']
            if slide['kind'] == 'extension':
                assert frame == number, step['id']
            elif number < 4:
                assert frame == number, step['id']
            else:
                assert frame <= 3, step['id']
                assert 'phase' in step or 'focus' in step, step['id']
            previous_frame = frame
            if 'focus' in step:
                focus = step['focus']
                assert isinstance(focus, list) and focus and all(isinstance(t, str) and t.strip() for t in focus), step['id']
            if 'phase' in step:
                start, end = step['phase']
                assert isinstance(start, int) and isinstance(end, int) and 0 <= start <= end, step['id']
    return data


def browser_payload(data):
    return 'window.COURSE = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n'


def sync():
    data = load_course()
    (ROOT / 'assets/course-data.js').write_text(browser_payload(data), encoding='utf-8')
    return data


if __name__ == '__main__':
    print('Synced', len(sync()['slides']), 'slides')
