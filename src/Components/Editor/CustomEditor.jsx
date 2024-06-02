"use client"
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor, { Config } from 'jodit-react'; // Assuming 'jodit-react' exports the Config type


const Customditor = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = useMemo(
        () => ({
            readonly: false,
            theme: 'dark', // Specify the theme here (e.g., 'dark', 'light', 'default')

            placeholder: placeholder || 'Start typing...',
            buttons: [
                'source',
                '|',
                'bold',
                'italic',
                'underline',
                '|',
                
		'font',
		'fontsize',
		'brush',
		'paragraph',
		'|',
                'ul',
                'ol',
                '|',
                'image',
                'video',
                'table',
                '|',
                'link',
                'unlink',
                '|',
                'hr',
                'eraser',
                '|',
                'fullsize',
                '|',
                'undo',
                'redo',
                '|',
              


                        ],
            allowDragAndDropImages: false, // Disable drag and drop image insertion
            imagePaste: false, // Disable pasting images from clipboard

            uploader: {
                insertImageAsBase64URI: true // Insert images as base64 data
            }
        }),
        [placeholder]
    );
    console.log(content)
    return (
        <JoditEditor
        
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={newContent => setContent(newContent)}
            onChange={newContent => setContent(newContent)}
            className='text-red'
        />
    );
};

export default Customditor;
