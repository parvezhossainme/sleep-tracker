import AddNewRecord from '@/components/AddNewRecord';
import AverageSleep from '@/components/AverageSleep';
import BestWorstSleep from '@/components/BestWorstSleep';
import Guest from '@/components/Guest';
import RecordChart from '@/components/RecordChart';
import RecordHistory from '@/components/RecordHistory';
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import React from 'react'

const Home = async () => {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <main className='bg-gray-100 text-gray-800 font-sans min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left Column */}
        <div className='space-y-6'>
          <div className='bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-6'>
            {/* User Image */}
            <Image
              src={user.imageUrl}
              alt={`${user.firstName}&#39;s profile`}
              className='w-24 h-24 rounded-full border border-gray-300 shadow-md'
              width={96}
              height={96}
            />

            {/* User Details */}
            <div className='flex-1'>
              <h2 className='text-2xl md:text-3xl font-bold text-purple-600 mb-2'>
                ফিরে এসেছেন, {user.firstName} 👋
              </h2>
              <p className='text-gray-600 mb-4'>
                আপনার সাম্প্রতিক ঘুমের কার্যকলাপের একটি দ্রুত ওভারভিউ এখানে। আপনার ডেটা অন্তর্দৃষ্টির উপর নজর রাখুন এবং আপনার কাজগুলি দক্ষভাবে পরিচালনা করুন!
              </p>
              <div className='space-y-2'>
                <p className='text-gray-600'>
                  <span className='font-semibold text-gray-800'>যোগদান:</span>{' '}
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
                <p className='text-gray-600'>
                  <span className='font-semibold text-gray-800'>
                    শেষ সক্রিয়:
                  </span>{' '}
                  {user.lastActiveAt
                    ? new Date(user.lastActiveAt).toLocaleString()
                    : 'প্রযোজ্য নয়'}
                </p>
              </div>
            </div>
          </div>
          <AddNewRecord />
        </div>

        {/* Right Column */}
        <div className='space-y-6'>
          {/* Placeholder for RecordStats, RecentRecord, and Insights */}
          <RecordChart />
          <AverageSleep />
          <BestWorstSleep />
        </div>
      </div>
      {/* Placeholder for SleepHistory */}
      <div className='max-w-7xl mx-auto'>
        <RecordHistory />
      </div>
    </main>
  );
}

export default Home