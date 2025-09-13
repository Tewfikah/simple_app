// export function getAllnotes get method
export async function getAllnotes(_,res){
   //try catch block
   try {
    //notes find all
    const notes = await Note.find().sort({createdAt:-1});// newest first
    //return notes
    res.status(200).json({notes});
   } catch (error) {
    //console log the error
    console.error("Error while fetching notes",error);
    res.status(500).json({message:"internal server error"});
   }
}

// export function getNoteById get method
export async function getNoteById(req,res)
{
   //try catch block
   try {
    //notes find by id
    const note = await Note.findById(req.params.id);
    //if note not found return 404
    if(!note)
    {
      return res.status(404).json({message:"Note not found"});
    }
    //return note
    res.status(200).json({note});
    } catch (error) {
    //console log the error
    console.error("Error while fetching note by id",error);
    res.status(500).json({message:"internal server error"});
   }
}

export async function createNote(req,res)
{
   //try catch block
   try {
    //destructure title and content from req.body
    const {title,content} = req.body;
    //create a new note
    const note = new Note({title,content});
    //save the note
    await note.save();
    //return the note
    res.status(201).json({message:"Note created successfully"});
    } catch (error) {
    //console log the error
    console.error("Error while creating note",error);
    res.status(500).json({message:"internal server error"});
   }
        
}

export async function updateNote(req,res)
{
//try catch block
   try {
    //destructure title and content from req.body
    const {title,content} = req.body;
    //find the note by id and update it
   const updateNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true});
// if note not found return 404
   if(!updateNote)
   {
    return res.status(404).json({message:"Note not found"});
   }
   //return the note
    res.status(200).json({updateNote});
   } catch (error) {
    //console log the error
    console.error("Error while updating note",error);
    res.status(500).json({message:"internal server error"});
   }
}


export async function deleteNote(req,res)
{
   //try catch block
   try {
    //find the note by id and delete it
   const deleteNote = await Note.findByIdAndDelete(req.params.id);
   // if note not found return 404
   if(!deleteNote)
   {
    return res.status(404).json({message:"Note not found"});
   }
   //return the note
    res.status(200).json({message:"Note deleted successfully"});
   } catch (error) {
    //console log the error
    console.error("Error while deleting note",error);
    res.status(500).json({message:"internal server error"});
   }
}