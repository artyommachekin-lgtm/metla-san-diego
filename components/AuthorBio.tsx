import React from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';

interface AuthorBioProps {
    name: string;
    role: string;
    bio: string;
}

const AuthorBio: React.FC<AuthorBioProps> = ({ name, role, bio }) => {
    return (
        <div className="bg-slate-50 p-6 rounded-xl my-10 flex items-start gap-4 not-prose">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-teal-700" />
            </div>
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <Link href="/about" className="font-bold text-slate-900 hover:text-teal-600 transition-colors">
                        {name}
                    </Link>
                    <span className="text-sm text-slate-500">·</span>
                    <span className="text-sm text-slate-500">{role}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{bio}</p>
            </div>
        </div>
    );
};

export default AuthorBio;
