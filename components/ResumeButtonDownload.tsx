import Link from 'next/link';
import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { buttonVariants } from '@/components/ui/button';


interface ResumeButtonDownloadProps {
    className?: string
}

const ResumeButtonDownload: React.FC<ResumeButtonDownloadProps> = ({ className }) => {
    return (
        <Link
            href="/ym-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonVariants({ size: "xs", variant: "outline" })} flex items-center uppercase gap-2 ${className}`}
        >
            <span>Download CV</span>
            <FiDownload className="text-xl" />
        </Link>
    )
}

export default ResumeButtonDownload;