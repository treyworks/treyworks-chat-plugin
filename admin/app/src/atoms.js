import { atom } from 'jotai';

export const chatWidgetsAtom = atom(twChatSettings.chat_widgets ? twChatSettings.chat_widgets : []);