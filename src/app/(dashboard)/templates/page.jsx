'use client';
import TemplateCenterModal from '@/src/components/templates/TemplateCenterPage';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();

    // Render the modal as always open. onClose navigates back.
    // We wrap it in a relative div to ensure it has context, although Modals usually use fixed positioning.
    return (
        <TemplateCenterModal isOpen={true} onClose={() => router.back()} />
    );
}
