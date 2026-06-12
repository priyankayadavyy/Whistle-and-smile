import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import type { User } from '../types';
import './UserCard.css';

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <img
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        className="user-avatar"
        loading="lazy"
      />
      <div className="user-info">
        <p className="user-name">{user.firstName} {user.lastName}</p>
        <p className="user-email">{user.email}</p>
      </div>
      <div className="user-details">
        <span className="user-detail">
          <Phone className="user-detail-icon" />
          {user.phone}
        </span>
        <span className="user-detail">
          <MapPin className="user-detail-icon" />
          {user.age} yrs
        </span>
      </div>
    </div>
  );
};
