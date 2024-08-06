import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeDonation } from '../store/donationSlice';

function DonateButton() {
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const donationStatus = useSelector((state) => state.donation.status);

  const handleDonate = () => {
    dispatch(makeDonation(amount));
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Donation amount"
      />
      <button onClick={handleDonate} disabled={donationStatus === 'loading'}>
        {donationStatus === 'loading' ? 'Processing...' : 'Donate'}
      </button>
      {donationStatus === 'succeeded' && <p>Thank you for your donation!</p>}
      {donationStatus === 'failed' && <p>Donation failed. Please try again.</p>}
    </div>
  );
}

export default DonateButton;