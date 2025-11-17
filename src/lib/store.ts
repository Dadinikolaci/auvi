import { create } from 'zustand';

type AnnotationState = {
  tool: 'arrow' | 'rectangle' | 'text' | null;
  setTool: (tool: 'arrow' | 'rectangle' | 'text' | null) => void;
};

export const useAnnotationStore = create<AnnotationState>((set) => ({
  tool: null,
  setTool: (tool) => set({ tool }),
}));
