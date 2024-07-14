
export const createChatSlice = (set,get) => ({
    selectChatType : undefined,
    selectChatData: undefined,
    selectChatMessages: [],
    setSelectedChatType: (selectChatType) => set(({selectChatType})),
    addChatMessage: (message) => {
        const selectedChatMessages=get().selectChatMessages;
        const selectedChatType=get().selectChatType;

        set({
            selectedChatMessages:[
                ...selectedChatMessages,
                { 
                    ...message,
                    recipient:selectedChatType ==='channel' ? message?.recipient :message?.recipient?._id,
                    sender:selectedChatType ==='channel' ? message?.sender :message?.sender?._id,}
                ],

        })

        
    },

    setSelectedChatData: (selectChatData) => set(({selectChatData})),
    setselectChatMessages: (selectChatMessages) => set({selectChatMessages}),

    closeChat:()=>set({
        selectChatType : undefined,
        selectChatData: undefined,   
    selectChatMessages: [],

    }),





  })
  