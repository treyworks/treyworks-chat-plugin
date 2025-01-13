import { atom } from 'jotai';

export const assistantsAtom = atom([]);
export const chatWidgetsAtom = atom(twChatSettings.chat_widgets ? twChatSettings.chat_widgets : []);