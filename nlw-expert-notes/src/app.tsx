import { ChangeEvent, useState } from 'react'
import logo from './assets/logo-nlw-expert.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'
import { Search } from 'lucide-react'

interface Note {
  id: string,
  date: Date,
  content: string
}

export function App() {
  const  [search, setSearch] = useState('')

  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes')
    
    if (notesOnStorage) {
      return JSON.parse(notesOnStorage)
    }

    return []
  })

  function onNoteCreated(content: String) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }

    const notesArray = [newNote, ...notes]

    setNotes(notesArray)

    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value
    setSearch(query)
  }

  const filteredNotes = search != '' ? notes.filter(note => note.content.toLowerCase().includes(search)) : notes

  

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
        <img src={logo} alt='NLW Expert'/>

        <form className='w-full'>
            <input type='text' placeholder='Busque em suas notas..' onChange={handleSearch} className='w-full bg-transparent text-3xl tracking-tight outline-none placeholder:text-slate-500' />
        </form>
        
        <div className='h-px bg-slate-700' /> 

        <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>

          <NewNoteCard onNoteCreated={onNoteCreated} />

          {filteredNotes.map( note => {
            return <NoteCard key={note.id} note={note} />
          }
            )}

        </div>
    </div>
  )
}





//outline - tailwind borda
// Tamanho no tailwind são multiplos de 4 - exemplo 2 x 4 = tamanho igual a 8
