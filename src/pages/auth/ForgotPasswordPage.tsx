import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Key, Shield } from 'lucide-react';

type Step = 'email' | 'otp' | 'reset';

const ForgotPasswordPage: React.FC = () => {
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending OTP
    console.log('Sending OTP to:', email);
    setStep('otp');
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate OTP verification
    console.log('Verifying OTP:', otp);
    if (otp === '123456') { // Mock verification
      setStep('reset');
    } else {
      alert('Invalid OTP. Use 123456 for demo.');
    }
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Password reset successful');
    alert('Password reset successful! Please login with your new password.');
  };

  const renderEmailStep = () => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Forgot Password?</h1>
        <p className="text-gray-600 mt-2">Enter your email to receive an OTP</p>
      </div>

      <form onSubmit={handleEmailSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
        >
          Send OTP via Email
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link to="/auth/login" className="inline-flex items-center text-gray-600 hover:text-red-600">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Link>
      </div>
    </div>
  );

  const renderOtpStep = () => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Enter OTP</h1>
        <p className="text-gray-600 mt-2">We've sent a code to {email}</p>
        <p className="text-sm text-gray-500 mt-1">Use 123456 for demo</p>
      </div>

      <form onSubmit={handleOtpSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Verification Code
          </label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-center text-lg tracking-widest"
            placeholder="Enter 6-digit code"
            maxLength={6}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
        >
          Verify Code
        </button>
      </form>

      <div className="mt-6 text-center">
        <button 
          onClick={() => setStep('email')}
          className="text-gray-600 hover:text-red-600"
        >
          Didn't receive the code? Try again
        </button>
      </div>
    </div>
  );

  const renderResetStep = () => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Key className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Reset Password</h1>
        <p className="text-gray-600 mt-2">Create a new password for your account</p>
      </div>

      <form onSubmit={handlePasswordReset} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            New Password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Enter new password"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Confirm new password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
        >
          Reset Password
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link to="/auth/login" className="text-gray-600 hover:text-red-600">
          Back to Login
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {step === 'email' && renderEmailStep()}
        {step === 'otp' && renderOtpStep()}
        {step === 'reset' && renderResetStep()}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;