import React from 'react';
import {
    Sparkles,
    Shuffle,
    Clock,
    MessageCircle,
    Link2,
    MoreHorizontal
} from 'lucide-react';


// Invite Modal Component
const InviteModal = ({ isOpen, onClose, onSend, loading }) => {
    const [email, setEmail] = React.useState('');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-lg shadow-2xl w-[400px] overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800 m-0">Invite to Board</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-6">
                    <p className="text-sm text-gray-600 mb-4">
                        Enter the email address of the person you'd like to invite to this board.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@company.com"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                                autoFocus
                            />
                        </div>
                    </div>
                </div>

                <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3 border-t border-gray-100">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors"
                        disabled={loading}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onSend(email)}
                        disabled={loading || !email}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {loading ? 'Sending...' : 'Send Invite'}
                    </button>
                </div>
            </div>
        </div>
    );
};

const BoardHeader = ({ boardTitle = 'work' }) => {
    const [isInviteModalOpen, setIsInviteModalOpen] = React.useState(false);
    const [isSending, setIsSending] = React.useState(false);

    const handleSendInvite = async (email) => {
        if (!email) return;

        setIsSending(true);
        try {
            // Use env variable or fallback
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
            const response = await fetch(`${apiUrl}/invitations/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inviterUserId: "1", // Mock ID
                    inviterName: "Admin User", // Mock Name
                    inviterEmail: "admin@mondayclone.com", // Mock Email
                    accountName: boardTitle,
                    invitations: [
                        { email: email, role: 'Member' }
                    ]
                }),
            });

            const data = await response.json();
            console.log('Invite Response:', data);

            if (response.ok) {
                // Backend returns 200 even if email sending partially failed
                if (data.failed && data.failed.length > 0) {
                    const errorMsg = data.failed[0].error || 'Unknown error';
                    alert(`Failed to send invitation. \nServer Error: ${errorMsg}`);
                    return; // Do not close modal
                }

                if (data.sentCount > 0) {
                    alert(`Invitation sent to ${email} successfully!`);
                    setIsInviteModalOpen(false);
                } else {
                    alert('No invitations were sent. Please check server logs.');
                }
            } else {
                throw new Error(data.message || 'Failed to send invitation');
            }
        } catch (error) {
            console.error('Invite Error:', error);
            alert(`Error: ${error.message}`);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <header className="flex items-center justify-between h-28 md:h-20 px-4 md:px-8 bg-white border-b border-gray-200 flex-shrink-0">
                {/* Left Section */}
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-transparent border-none rounded cursor-pointer transition-colors hover:bg-gray-100">
                        <h2 className="text-xl md:text-2xl font-normal text-gray-800 m-0 leading-tight">{boardTitle}</h2>
                    </button>
                </div>

                {/* Right Section - Actions */}
                <div className="flex items-center gap-2 h-8 select-none">
                    {/* Sidekick Button */}
                    <div className="hidden md:flex items-center gap-2">
                        <button className="text-[13px] inline-flex items-center justify-center gap-1.5 px-3 py-1.5 h-8 bg-transparent text-gray-800 cursor-pointer transition-all whitespace-nowrap hover:bg-gray-100 rounded-md">
                            <Sparkles size={18} className="text-purple-600 flex-shrink-0" />
                            <span>Sidekick</span>
                        </button>
                    </div>

                    {/* Integrate + Automate Group */}
                    <div className="hidden lg:flex items-center gap-2">
                        <button className="text-[13px] inline-flex items-center justify-center gap-1.5 px-3 py-1.5 h-8 font-normal text-gray-800 cursor-pointer transition-all whitespace-nowrap hover:bg-gray-100 hover:border-gray-400 rounded-md">
                            <Shuffle size={18} />
                            <span>Integrate</span>

                        </button>

                        <button className="text-[13px] inline-flex items-center justify-center gap-1.5 px-3 py-1.5 h-8 font-normal text-gray-800 cursor-pointer transition-all whitespace-nowrap hover:bg-gray-100 hover:border-gray-400 rounded-md">
                            <Clock size={18} />
                            <span>Automate</span>
                        </button>
                    </div>

                    {/* Icon Buttons Group */}
                    <div className="flex items-center gap-2">
                        <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-gray-800 cursor-pointer transition-all flex-shrink-0 hover:bg-gray-100 hover:border-gray-400 rounded-md" aria-label="Start a board discussion">
                            <MessageCircle size={18} />
                        </button>
                    </div>

                    {/* Avatar Group */}
                    <div className="flex items-center gap-2">
                        <button className="inline-flex items-center justify-center w-8 h-8 p-0 bg-transparent border-none rounded text-gray-800 cursor-pointer transition-opacity flex-shrink-0" aria-label="Board activity">
                            <div className="flex items-center justify-center w-7 h-7 bg-[#FF0D8B] text-white rounded-full text-xs font-semibold cursor-pointer transition-opacity flex-shrink-0 hover:opacity-85">
                                A
                            </div>
                        </button>
                    </div>

                    {/* Invite + Link Group */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsInviteModalOpen(true)}
                            className="text-[13px] inline-flex items-center justify-center px-2 py-1.5 h-8 bg-transparent border border-gray-300 rounded text-sm font-normal text-gray-800 cursor-pointer transition-all whitespace-nowrap hover:bg-gray-100 hover:border-gray-400"
                        >
                            Invite / 1
                        </button>

                        <button className="inline-flex items-center justify-center w-8 h-8 p-0 bg-transparent text-gray-800 cursor-pointer transition-all flex-shrink-0 hover:bg-gray-100 hover:border-gray-400 rounded-md" aria-label="Copy Link">
                            <Link2 size={18} />
                        </button>
                    </div>

                    {/* Menu Button */}
                    <div className="flex items-center gap-2">
                        <button className="inline-flex items-center justify-center w-8 h-8 p-0 bg-transparent text-gray-800 cursor-pointer transition-all flex-shrink-0 hover:bg-gray-100 hover:border-gray-400 rounded-md" aria-label="Options">
                            <MoreHorizontal size={20} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Invite Modal */}
            <InviteModal
                isOpen={isInviteModalOpen}
                onClose={() => setIsInviteModalOpen(false)}
                onSend={handleSendInvite}
                loading={isSending}
            />
        </>
    );
};

export default BoardHeader;
