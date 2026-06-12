import React, { useState } from 'react';
import { RadioGroup } from '../components/RadioGroup';
import { Input } from '../components/Input';
import { Checkbox } from '../components/Checkbox';
import { Button } from '../components/Button';
import { UserCard } from '../components/UserCard';
import { SkeletonGrid } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { useUsers } from '../hooks/useUsers';
import './BookingForm.css';

export const BookingForm: React.FC = () => {
  const [hasTeethIssue, setHasTeethIssue] = useState<string | null>(null);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'male' | 'female'>('all');
  const { users, loading, error, refetch } = useUsers();

  const handleRadioChange = (value: string) => {
    setHasTeethIssue(value);
    if (value === 'yes') {
      setShowUsers(true);
    } else {
      setShowUsers(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !hasTeethIssue || !consent) {
      return;
    }
    alert(`Booking submitted!\nName: ${fullName}\nPhone: ${phone}\nTeeth Issues: ${hasTeethIssue}`);
  };

  const filteredUsers = users?.filter((user) => {
    if (activeFilter === 'all') return true;
    return user.gender.toLowerCase() === activeFilter;
  });

  return (
    <section className="booking-section">
      <div className="booking-container">
        <div className="booking-radio">
          <RadioGroup
            name="teeth-issue"
            label="Do you have Teeth Gaps or Crooked Teeth?"
            options={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ]}
            selected={hasTeethIssue}
            onChange={handleRadioChange}
          />
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <Input
            label="Full Name"
            placeholder="Ajay Kumar"
            value={fullName}
            onChange={setFullName}
            required
          />
          <Input
            label="Mobile number"
            placeholder="Mobile number"
            value={phone}
            onChange={setPhone}
            prefix="+91"
            required
          />
          <Button type="submit" fullWidth>
            Book a Free Scan
          </Button>
          <div className="booking-checkbox-wrapper">
            <Checkbox
              checked={consent}
              onChange={setConsent}
              label={
                <>
                  I hereby consent to receive calls / messages from Whistle and its partners and override DND settings.
                </>
              }
            />
          </div>
        </form>

        {/* User Data Section - Shows when "Yes" is selected */}
        {showUsers && (
          <div className="booking-users-section">
            <div className="booking-users-title">
              <h3>Our Happy Customers</h3>
              <p>See how others transformed their smiles with Whistle</p>
            </div>

            <div className="booking-users-filter">
              <button
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button
                className={`filter-btn ${activeFilter === 'male' ? 'active' : ''}`}
                onClick={() => setActiveFilter('male')}
              >
                Male
              </button>
              <button
                className={`filter-btn ${activeFilter === 'female' ? 'active' : ''}`}
                onClick={() => setActiveFilter('female')}
              >
                Female
              </button>
            </div>

            {loading && <SkeletonGrid count={6} />}
            
            {error && (
              <ErrorMessage
                message={error}
                onRetry={refetch}
              />
            )}
            
            {!loading && !error && filteredUsers && filteredUsers.length > 0 && (
              <div className="users-grid">
                {filteredUsers.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            )}
            
            {!loading && !error && filteredUsers && filteredUsers.length === 0 && (
              <div className="no-users-message">
                No users found for this filter.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
