# Oumer Ahmed------UGE/24113/13#

# Surgery Department App

Comprehensive surgery scheduling and surgeon management system with real-time availability tracking.

## Features

- **Surgeon Management**: Track surgeon availability and specialties
- **Procedure Scheduling**: Schedule new surgical procedures
- **Real-time Status**: Monitor current surgeries and operating rooms
- **Experience Tracking**: View surgeon experience and performance ratings
- **Availability Management**: Track when surgeons are available, busy, or off-duty

## Components

### SurgeonCard
Displays individual surgeon information with availability status, current procedures, and scheduling options.

### ScheduleButton
Central scheduling interface for booking new surgical procedures.

## Data Structure

Surgeons include:
- Personal information (name, specialty, experience)
- Availability status (available, busy, off-duty)
- Current procedure and operating room assignments
- Performance metrics (total surgeries, ratings)
- Next available time slots

## Usage

\`\`\`bash
npm run dev:surgery
\`\`\`

The app will be available at http://localhost:3003
