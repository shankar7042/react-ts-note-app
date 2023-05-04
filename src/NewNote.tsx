import { FC } from "react";
import NoteForm from "./NoteForm";
import { NoteData, Tag } from "./App";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const NewNote: FC<NewNoteProps> = ({ onSubmit, onAddTag, availableTags }) => {
  return (
    <>
      <h1 className="text-primary text-center">New Note</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default NewNote;
