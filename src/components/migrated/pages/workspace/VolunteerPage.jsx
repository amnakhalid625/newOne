import React from 'react';
import { useParams } from 'next/navigation';
import { ChevronDown, MessageCircle, UserCircle, MoreHorizontal, Star } from 'lucide-react';

const VolunteerPage = () => {
  const { workspaceId } = useParams();

  const workspaceInfo = { name: 'Volunteer Registration Management', initial: 'V', color: '#ffcb00', workspaceNumber: workspaceId || '2580952' };
  const boards = [{ name: 'Volunteer registration management' }];

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#fff' }}>
      <div style={{ padding: '40px 80px 0 80px', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '24px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '12px', background: workspaceInfo.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '32px', fontWeight: '400' }}>
            {workspaceInfo.initial}
          </div>
          <div style={{ flex: 1, paddingTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <h1 style={{ fontSize: '32px', fontWeight: '400', color: '#323338', margin: 0, lineHeight: '1.2' }}>{workspaceInfo.name}</h1>
              <button style={{ background: 'none', border: 'none', padding: '4px', cursor: 'pointer', color: '#676879', display: 'flex', alignItems: 'center' }}><ChevronDown size={24} /></button>
            </div>
            <button style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer', fontSize: '14px', color: '#676879' }}>Add workspace description</button>
          </div>
          <div style={{ display: 'flex', gap: '8px', paddingTop: '8px' }}>
            <button style={{ padding: '8px 16px', background: 'none', border: '1px solid #c5c7d0', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#323338', height: '32px' }}><MessageCircle size={16} />Feedback</button>
            <button style={{ padding: '8px 16px', background: '#0073ea', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#fff', fontWeight: '400', height: '32px' }}><UserCircle size={16} />Invite / 1</button>
            <button style={{ padding: '8px', background: 'none', border: '1px solid #c5c7d0', borderRadius: '4px', cursor: 'pointer', color: '#323338', height: '32px', width: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MoreHorizontal size={16} /></button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '32px', borderBottom: '1px solid #e6e9ef', paddingBottom: '0' }}>
          <button style={{ padding: '12px 0', background: 'none', border: 'none', borderBottom: '2px solid #0073ea', cursor: 'pointer', fontSize: '14px', fontWeight: '400', color: '#0073ea', marginBottom: '-1px' }}>Recents</button>
          <button style={{ padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', color: '#676879' }}>Content</button>
          <button style={{ padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', color: '#c5c7d0' }}>Permissions</button>
        </div>
      </div>
      <div style={{ padding: '0 80px', marginTop: '24px' }}>
        {boards.map((board, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: '#fff', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.2s', marginBottom: '2px' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#f6f7fb'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; }}>
            <div style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', color: '#323338' }}><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z" fillRule="evenodd" clipRule="evenodd" /></svg></div>
            <span style={{ fontSize: '14px', color: '#323338', fontWeight: '400', flex: 1 }}>{board.name}</span>
            <button style={{ background: 'none', border: 'none', padding: '4px', cursor: 'pointer', color: '#d0d4e4', display: 'flex', alignItems: 'center' }}><Star size={16} /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerPage;