#!/usr/bin/env python3
"""Check the editable course data and sync the offline browser payload."""
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]


def load_course():
    data = json.loads((ROOT / 'content/course.json').read_text(encoding='utf-8'))
    assert len(data['slides']) == 29 and len(data['chapters']) == 6
    for i, slide in enumerate(data['slides'], 1):
        assert slide['id'] == f'S{i:02d}'
        assert all(key in data['references'] for key in slide['sources'])
        steps = slide['steps']
        ids = [step['id'] for step in steps]
        assert set(ids) == {f'S{i:02d}.{j}' for j in range(len(ids))}, slide['id']
        assert len(steps) >= 4 and ids[0] == f'S{i:02d}.0', slide['id']
        assert slide['estimatedSeconds'] == sum(step['estimatedSeconds'] for step in steps)
        previous_frame = 0
        for step in steps:
            number = int(step['id'].split('.')[1])
            narration = step['narration']
            assert narration == narration.strip() and re.search(r'[。？！][”」]?$', narration), step['id']
            assert not re.search(r'\n|\r|［|S\d{2}[./]\d+|TODO|待补充|占位', narration), step['id']
            assert step['label'].strip() and 'leadIn' not in step and 'trigger' not in step, step['id']
            assert isinstance(step['estimatedSeconds'], int) and step['estimatedSeconds'] > 0, step['id']
            frame = step.get('frame', number)
            assert previous_frame <= frame <= 3, step['id']
            if number < 4:
                assert frame == number, step['id']
            else:
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
