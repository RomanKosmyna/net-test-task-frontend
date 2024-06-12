import React, { Dispatch } from 'react';

type Props = {
  text: string;
  setText: Dispatch<React.SetStateAction<string>>;
};

const EditableText = ({ text, setText }: Props) => {

  return (
    <div>
      <div>
        <textarea
          value={text}
          placeholder={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-[450px] bg-card text-white rounded-lg 
          focus:border-inputBorder placeholder-white resize-none p-4
          font-medium"
        />
      </div>
    </div>
  );
};

export default EditableText;
