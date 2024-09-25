import {CheckCircledIcon} from '@radix-ui/react-icons'

interface FromIconsProps{
    messages?: string
}

export const FormSuccess = ({messages}: FromIconsProps)=>{
    if(!messages) return null

    // change the color of the text and the background
    return(
        <div className='bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500'>
            <CheckCircledIcon  className='h-4 w-4'/>
            <p>{messages}</p>
        </div>
    )
}