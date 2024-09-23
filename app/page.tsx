import {Button} from '@/components/ui/button'
import { Poppins }  from "next/font/google"
import { cn } from '@/lib/utils';
import { LoginButton } from '@/components/auth/login-button';
// Page(main) file

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className='flex h-full flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400'>
      <div className='space-y-8'>
        <h1 className={cn('text-6xl font-semibold text-white drop-shadow-md', font.className)}>
          🔐Auth
        </h1>
        <p>
          Authentication service project
        </p>
        <div>
          <LoginButton>
            <Button variant='secondary' size='lg' >Click</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
