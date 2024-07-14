
export const createChatSlice = (set) => ({
    selectChatType : undefined,
    selectChatData: undefined,
    selectChatMessages: [],
    setSelectedChatType: (selectChatType) => set(({selectChatType})),
    setSelectedChatData: (selectChatData) => set(({selectChatData})),
    setselectChatMessages: (selectChatMessages) => set({selectChatMessages}),

    closeChat:()=>set({
        selectChatType : undefined,
        selectChatData: undefined,   
    selectChatMessages: [],

    }),





  })
  