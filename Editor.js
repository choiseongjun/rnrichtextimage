import React,{useState} from 'react'
import {RichEditor,RichToolbar} from 'react-native-pell-rich-editor';
import {View,Text} from 'react-native'
import ImagePicker from "react-native-customized-image-picker";
const Editor = () => {
    const richText = React.createRef();
    
    const [ imageSource, setImageSource ] = useState(null);
    const [ data, setData ] = useState(null);
    const onPressAddImage = () => {
        // insert URL
        // richText.current?.insertImage(
        //     'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png',
        //     'background: gray;',
        // );
        // insert base64
        // this.richText.current?.insertImage(`data:${image.mime};base64,${image.data}`);
       
       
          ImagePicker.openPicker({includeBase64:true}).then(image => {
            console.log(image[0]);
            richText.current?.insertImage(`data:${image[0].mime};base64,${image[0].data}`);
          });
    }

    return (
    <View>
        <RichEditor
                ref={richText}
                style={{minHeight:700,flex:1}}
                initialContentHTML={'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'}
            
                />
        <RichToolbar editor={richText}
                    onPressAddImage={onPressAddImage}
        />
    </View>
    )
}
export default Editor;