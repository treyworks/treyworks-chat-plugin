import toast from "react-hot-toast";

export const copyToClipboard = (textToCopy) => {
    const textarea = document.createElement("textarea");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "-9999px";
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    // Select the text and copy it
    textarea.select();
    document.execCommand("copy");
    toast.success("Copied to clipboard");
}
