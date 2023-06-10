import {
  create
} from 'zustand'

export const BottomSheetStore = create((set) => ({
  isActive: true,
  content: {
    foodNames: [],
    nutrients: []
  },
  setActive: (active) => set((state) => ({
    isActive: active
  })),
  setContent: (content) => set((state) => ({
    content: content
  })),
}))

export const toggleLoadingScreen = create((set) => ({
  isLoading: false,
  setLoading: (loading) => set((state) => ({
    isLoading: loading
  })),
}))

export const TriggerButton = create((set) => ({
  isTrigger: false,
  setTrigger: (trigger) => set((state) => ({
    isTrigger: trigger
  })),
}))