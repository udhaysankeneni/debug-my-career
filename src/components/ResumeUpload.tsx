'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, CheckCircle, AlertCircle, Download } from 'lucide-react';

interface ResumeUploadProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeUpload({ isOpen, onClose }: ResumeUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Check file size (max 10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }
      
      // Check file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!allowedTypes.includes(selectedFile.type)) {
        alert('Please upload a PDF or Word document');
        return;
      }
      
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file || !email || !name) {
      alert('Please fill in all required fields');
      return;
    }

    setIsUploading(true);
    setUploadStatus('idle');

    try {
      // Create mailto link with detailed instructions
      const emailBody = `Hi Uday,

I would like to have my resume reviewed. Here are my details:

Name: ${name}
Email: ${email}
${message ? `Additional Message: ${message}` : ''}

IMPORTANT: Please attach the following file to this email:
File Name: ${file.name}
File Size: ${(file.size / 1024 / 1024).toFixed(2)} MB

Best regards,
${name}

--- 
Note: Due to browser security restrictions, the resume file cannot be automatically attached. Please manually attach the file "${file.name}" that you just uploaded before sending this email.`;

      const mailtoLink = `mailto:uday@debugmycareer.com?subject=Resume Review Request from ${name}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.open(mailtoLink, '_blank');
      
      setUploadStatus('success');
      
      // Reset form after 5 seconds to give user time to read instructions
      setTimeout(() => {
        onClose();
        setFile(null);
        setEmail('');
        setName('');
        setMessage('');
        setUploadStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Error:', error);
      setUploadStatus('error');
    } finally {
      setIsUploading(false);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const downloadEmailTemplate = () => {
    if (!file || !email || !name) return;
    
    const emailContent = `To: uday@debugmycareer.com
Subject: Resume Review Request from ${name}

Hi Uday,

I would like to have my resume reviewed. Here are my details:

Name: ${name}
Email: ${email}
${message ? `Additional Message: ${message}` : ''}

IMPORTANT: Please attach the following file to this email:
File Name: ${file.name}
File Size: ${(file.size / 1024 / 1024).toFixed(2)} MB

Best regards,
${name}

--- 
INSTRUCTIONS:
1. Copy and paste this content into a new email
2. Send it to: uday@debugmycareer.com
3. Don't forget to attach your resume file: ${file.name}`;

    const blob = new Blob([emailContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `resume-review-email-${name.replace(/\s+/g, '-').toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  // Handle backdrop click to close modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-slate-800 rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-100">Upload Resume for Review</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 hover:bg-slate-700 p-2 rounded-lg transition-all duration-200"
            title="Close modal (ESC)"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {uploadStatus === 'success' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-8"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-100 mb-2">
              Email Draft Created!
            </h3>
            <div className="text-slate-300 space-y-3">
              <p className="font-medium">
                Your email client should have opened with a draft email to Uday.
              </p>
              <div className="bg-slate-700 rounded-lg p-4 text-left">
                <p className="font-semibold text-blue-400 mb-2">📎 Next Steps:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Go to your email client (Gmail, Outlook, etc.)</li>
                  <li>Find the draft email to uday@debugmycareer.com</li>
                  <li>Click the &quot;Attach&quot; or &quot;📎&quot; button</li>
                  <li>Select and attach: <span className="font-mono bg-slate-600 px-1 rounded">{file?.name}</span></li>
                  <li>Click &quot;Send&quot; to submit your resume</li>
                </ol>
              </div>
              <p className="text-xs text-slate-400">
                Due to browser security, files cannot be automatically attached to emails.
              </p>
              <button
                onClick={downloadEmailTemplate}
                className="mt-4 bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 mx-auto"
              >
                <Download className="w-4 h-4" />
                Download Email Template
              </button>
            </div>
          </motion.div>
        ) : uploadStatus === 'error' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-8"
          >
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-100 mb-2">
              Something went wrong
            </h3>
            <p className="text-slate-300 mb-4">
              Please try again or contact us directly at uday@debugmycareer.com
            </p>
            <button
              onClick={() => setUploadStatus('idle')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Resume File * (PDF or Word, max 10MB)
              </label>
              {!file ? (
                <div className="relative border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-slate-500 transition-colors">
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-400 mb-2">
                    Click to upload or drag and drop
                  </p>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <p className="text-xs text-slate-500">
                    PDF, DOC, DOCX up to 10MB
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-between bg-slate-700 rounded-lg p-4 border border-slate-600">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-slate-100 font-medium">{file.name}</p>
                      <p className="text-slate-400 text-sm">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="text-slate-400 hover:text-red-400 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Additional Message (Optional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Any specific areas you'd like feedback on?"
              />
            </div>

            <div className="grid grid-cols-1 gap-3">
              <motion.button
                type="submit"
                disabled={isUploading || !file || !email || !name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isUploading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Creating Email...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    Open Email Client
                  </>
                )}
              </motion.button>

              <motion.button
                type="button"
                onClick={downloadEmailTemplate}
                disabled={!file || !email || !name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-slate-600 text-white py-3 rounded-lg font-semibold hover:bg-slate-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Email Template
              </motion.button>
            </div>

            <div className="text-xs text-slate-400 text-center space-y-1">
              <p>📧 <strong>Email Client:</strong> Opens your default email app with pre-filled content</p>
              <p>📋 <strong>Download Template:</strong> Saves email content as a text file for manual copy/paste</p>
              <p>📎 <strong>Important:</strong> You&apos;ll need to manually attach the <span className="font-medium">{file?.name}</span> file before sending</p>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}