import { useState } from "react";
import { toast } from 'react-toastify';

const SingleList = ({ rgb, weight, index, hexColor }) => {
    // console.log(hexColor);
    const [alert, setalert] = useState(false);
    const bc_color = rgb.join(',');
    const hexValue = `#${hexColor}`;
    const saveToClipboard = async () => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hexValue}`);
                toast.success('Color copied to clipboard');
            } catch (error) {
                toast.error('Failed to copy color to clipboard');
            }
        } else {
            toast.error('Clipboard access not available');
        }
    };

    // console.log(hexValue);
    return (
        <article className={`color`} style={{ backgroundColor: `rgb(${bc_color})` }} onClick={saveToClipboard}>
            <p className={`${index > 10 ? 'color-white' : 'color-black'}`}>{weight}%</p>
            <p className={`${index > 10 ? 'color-white' : 'color-black'}`}>{hexValue}</p>
        </article>
    )
}
export default SingleList 