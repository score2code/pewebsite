import type { Pick as UIPick } from '@/app/types';
import { validatePickArray } from './validation';

// Refatorado para usar validação Zod e mapeamento legado
export function parsePicks(data: any[]): UIPick[] {
  const validated = validatePickArray(Array.isArray(data) ? data : []);
  // Converte o tipo inferido pelo Zod para o tipo de UI, se necessário
  return validated as unknown as UIPick[];
}
