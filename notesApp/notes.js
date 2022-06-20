
const fs = require('fs');

const addnotes = (title, body) => {
   const notes = loading();
   const duplicates = notes.filter(function (note) {
      return note.title === title;
   })
   if (duplicates.length === 0) {
      notes.push({
         title: title,
         body: body
      });

      savenotes(notes);
      console.log("Notes Added Successfully!!");
   }else{
      console.log("Notes title taken!!");
   }
}

const deletenotes = (title) =>{
       const notes = loading();
      //  const notestokeep = notes.filter(function (note){
      //       return note.title!=title;
      //  })
      const notestokeep = notes.filter( (note) =>note.title!=title )
       if(notestokeep.length===notes.length){
              console.log("Notes not Found !!");
       }
       else{
             console.log("Notes removed successfully !!");
             savenotes(notestokeep);
       }

}

const savenotes = (notes) => {
   const dataJson = JSON.stringify(notes);
   fs.writeFileSync('notes.json', dataJson);
}

const listnotes = () =>{
   const notes = loading();
   notes.forEach(note => {
      console.log(note.title);
   });
}

const readnotes = (title) =>{
   const notes = loading();
   const Foundnotes = notes.find((note)=>{
      return note.title===title;
   })
   if(Foundnotes){
      console.log(Foundnotes.title);
      console.log(Foundnotes.body);
   }
   else{
      console.log("Notes not Found!!");
   }
}

const loading = () => {
   try {
      const bufferData = fs.readFileSync('notes.json');
      const dataJson = bufferData.toString();
      return JSON.parse(dataJson);
   } catch (e) {
      return [];
   }
}

module.exports = {
   addnotes: addnotes,
   deletenotes:deletenotes,
   listnotes:listnotes,
   readnotes:readnotes
}