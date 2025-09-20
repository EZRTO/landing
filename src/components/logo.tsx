import Image from 'next/image';
import Link from 'next/link';

export default function AppLogo(){
    return(
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="relative w-24 h-12">
                <Image
                    src="/logo.png"
                    alt="ezrto"
                    fill
                    sizes="100vw"
                    priority
                    className="object-contain"
                />
            </div>
        </Link>
    )
}