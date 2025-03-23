import Link from 'next/link';

export default function TopMenuItem ({ title, pageRef}:{title:string, pageRef:string}) {
    return (
        <Link className="w-[120px] text-center mt-auto mb-auto text-[24px] text-white hover:text-[#00FFFF] duration-300" href={pageRef}>
            {title}
        </Link>
    )
}