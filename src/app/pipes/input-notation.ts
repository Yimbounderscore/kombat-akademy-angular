import { Pipe, PipeTransform } from '@angular/core';

interface InputPart {
  type: 'svg' | 'text';
  id?: string;
  text?: string;
}

@Pipe({
  name: 'inputNotation',
  standalone: true
})
export class InputNotationPipe implements PipeTransform {
  private readonly inputMap: { [key: string]: string } = {
    'B': 'back',
    'U': 'up',
    'D': 'down',
    'F': 'forward',
    'U+B': 'up-back',
    'U+F': 'up-forward',
    'D+B': 'down-back',
    'D+F': 'down-forward',
    '1': 'universal-1',
    '2': 'universal-2',
    '3': 'universal-3',
    '4': 'universal-4',
    'L1': 'playstation-l1',
    'R1': 'playstation-r1',
    'L2': 'playstation-l2',
    'R2': 'playstation-r2',
    'THROW': 'playstation-l1',
    'KAMEO': 'playstation-r1',
    'SS': 'playstation-l2',
    'EX': 'playstation-r2'
  };

  transform(value: string): InputPart[] {
    if (!value) return [];
    const parts: InputPart[] = [];
    const tokens = value.split(/(\s+|,|\+)/);
    for (const token of tokens) {
      const trimmed = token.trim();
      if (!trimmed) continue;
      if (trimmed === '+' || trimmed === ',' || trimmed === ' ') {
        parts.push({ type: 'text', text: trimmed === ' ' ? ' ' : trimmed });
        continue;
      }
      const upperToken = trimmed.toUpperCase();
      const svgId = this.inputMap[upperToken];
      if (svgId) {
        parts.push({ type: 'svg', id: svgId });
      } else {
        parts.push({ type: 'text', text: trimmed });
      }
    }
    return parts;
  }
}