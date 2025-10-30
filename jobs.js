// jobs.js
const jobsList = [
  // 🏢 1. Administration & Office
  { id: 'secretary', title: 'Secretary', wage: 22.00, days: [1,2,3,4,5] },
  { id: 'office_clerk', title: 'Office Clerk', wage: 18.00, days: [1,2,3,4,5] },
  { id: 'office_assistant', title: 'Office Assistant', wage: 17.00, days: [1,2,3,4,5] },
  { id: 'operations_manager', title: 'Operations Manager', wage: 50.00, days: [1,2,3,4,5] },
  { id: 'hr_manager', title: 'HR Manager', wage: 45.00, days: [1,2,3,4,5] },
  { id: 'accountant', title: 'Accountant', wage: 30.00, days: [1,2,3,4,5] },
  { id: 'financial_executive', title: 'Financial Executive', wage: 35.00, days: [1,2,3,4,5] },
  { id: 'admin_officer', title: 'Administrative Officer', wage: 25.00, days: [1,2,3,4,5] },
  { id: 'auditor', title: 'Auditor', wage: 32.00, days: [1,2,3,4,5] },

  // 💻 2. Technology & IT
  { id: 'computer_technician', title: 'Computer Technician', wage: 22.00, days: [1,2,3,4,5] },
  { id: 'software_developer', title: 'Software Developer', wage: 40.00, days: [1,2,3,4,5] },
  { id: 'web_developer', title: 'Web Developer', wage: 38.00, days: [1,2,3,4,5] },
  { id: 'game_developer', title: 'Game Developer', wage: 45.00, days: [1,2,3,4,5] },
  { id: 'data_analyst', title: 'Data Analyst', wage: 34.00, days: [1,2,3,4,5] },
  { id: 'ai_engineer', title: 'AI Engineer', wage: 50.00, days: [1,2,3,4,5] },
  { id: 'network_admin', title: 'Network Administrator', wage: 28.00, days: [1,2,3,4,5] },
  { id: 'cybersecurity_specialist', title: 'Cybersecurity Specialist', wage: 46.00, days: [1,2,3,4,5] },
  { id: 'it_support_technician', title: 'IT Support Technician', wage: 24.00, days: [1,2,3,4,5] },
  { id: 'database_admin', title: 'Database Administrator', wage: 36.00, days: [1,2,3,4,5] },

  // 🏭 3. Engineering & Technology
  { id: 'mechanical_engineer', title: 'Mechanical Engineer', wage: 42.00, days: [1,2,3,4,5] },
  { id: 'electrical_engineer', title: 'Electrical Engineer', wage: 42.00, days: [1,2,3,4,5] },
  { id: 'civil_engineer', title: 'Civil Engineer', wage: 40.00, days: [1,2,3,4,5] },
  { id: 'chemical_engineer', title: 'Chemical Engineer', wage: 44.00, days: [1,2,3,4,5] },
  { id: 'software_engineer', title: 'Software Engineer', wage: 45.00, days: [1,2,3,4,5] },
  { id: 'industrial_technician', title: 'Industrial Technician', wage: 26.00, days: [1,2,3,4,5] },
  { id: 'maintenance_technician', title: 'Maintenance Technician', wage: 24.00, days: [1,2,3,4,5] },
  { id: 'cad_designer', title: 'CAD Designer', wage: 29.00, days: [1,2,3,4,5] },
  { id: 'surveyor', title: 'Surveyor', wage: 30.00, days: [1,2,3,4,5] },

  // 🧪 4. Science & Research
  { id: 'biologist', title: 'Biologist', wage: 35.00, days: [1,2,3,4,5] },
  { id: 'chemist', title: 'Chemist', wage: 35.00, days: [1,2,3,4,5] },
  { id: 'physicist', title: 'Physicist', wage: 38.00, days: [1,2,3,4,5] },
  { id: 'lab_researcher', title: 'Lab Researcher', wage: 30.00, days: [1,2,3,4,5] },
  { id: 'data_scientist', title: 'Data Scientist', wage: 46.00, days: [1,2,3,4,5] },
  { id: 'geologist', title: 'Geologist', wage: 33.00, days: [1,2,3,4,5] },
  { id: 'astronomer', title: 'Astronomer', wage: 40.00, days: [1,2,3,4,5] },
  { id: 'ecologist', title: 'Ecologist', wage: 31.00, days: [1,2,3,4,5] },
  { id: 'microbiologist', title: 'Microbiologist', wage: 32.00, days: [1,2,3,4,5] },

  // 🧑‍🏫 5. Education
  { id: 'primary_teacher', title: 'Primary School Teacher', wage: 28.00, days: [1,2,3,4,5] },
  { id: 'secondary_teacher', title: 'Secondary School Teacher', wage: 30.00, days: [1,2,3,4,5] },
  { id: 'university_lecturer', title: 'University Lecturer', wage: 45.00, days: [1,2,3,4,5] },
  { id: 'tutor', title: 'Tutor', wage: 25.00, days: [1,2,3,4,5,6] },
  { id: 'education_counselor', title: 'Education Counselor', wage: 30.00, days: [1,2,3,4,5] },
  { id: 'principal', title: 'Principal', wage: 50.00, days: [1,2,3,4,5] },
  { id: 'education_officer', title: 'Education Officer', wage: 35.00, days: [1,2,3,4,5] },
  { id: 'skills_trainer', title: 'Skills Trainer', wage: 28.00, days: [1,2,3,4,5] },

  // 🏥 6. Medical & Health
  { id: 'doctor', title: 'Doctor', wage: 55.00, days: [1,2,3,4,5,6] },
  { id: 'nurse', title: 'Nurse', wage: 32.00, days: [0,1,2,3,4,5,6] },
  { id: 'medical_assistant', title: 'Medical Assistant', wage: 28.00, days: [1,2,3,4,5,6] },
  { id: 'pharmacist', title: 'Pharmacist', wage: 40.00, days: [1,2,3,4,5] },
  { id: 'physiotherapist', title: 'Physiotherapist', wage: 38.00, days: [1,2,3,4,5] },
  { id: 'dentist', title: 'Dentist', wage: 52.00, days: [1,2,3,4,5] },
  { id: 'surgeon', title: 'Surgeon', wage: 70.00, days: [1,2,3,4,5] },
  { id: 'psychologist', title: 'Psychologist', wage: 48.00, days: [1,2,3,4,5] },
  { id: 'public_health_officer', title: 'Public Health Officer', wage: 33.00, days: [1,2,3,4,5] },

  // 🔧 7. Technical & Skilled Trades
  { id: 'mechanic', title: 'Mechanic', wage: 25.00, days: [1,2,3,4,5,6] },
  { id: 'plumber', title: 'Plumber', wage: 26.00, days: [1,2,3,4,5,6] },
  { id: 'electrician', title: 'Electrician', wage: 28.00, days: [1,2,3,4,5] },
  { id: 'carpenter', title: 'Carpenter', wage: 27.00, days: [1,2,3,4,5] },
  { id: 'welder', title: 'Welder', wage: 26.00, days: [1,2,3,4,5] },
  { id: 'painter', title: 'Painter', wage: 24.00, days: [1,2,3,4,5] },
  { id: 'hvac_technician', title: 'Aircond Technician', wage: 27.00, days: [1,2,3,4,5] },
  { id: 'machine_operator', title: 'Machine Operator', wage: 23.00, days: [1,2,3,4,5] },
  { id: 'lorry_driver', title: 'Lorry Driver', wage: 22.00, days: [1,2,3,4,5,6] },

  // 🧑‍🌾 8. Agriculture, Fishery & Plantation
  { id: 'farmer', title: 'Farmer', wage: 20.00, days: [0,1,2,3,4,5,6] },
  { id: 'breeder', title: 'Breeder', wage: 21.00, days: [0,1,2,3,4,5,6] },
  { id: 'fisherman', title: 'Fisherman', wage: 22.00, days: [0,1,2,3,4,5,6] },
  { id: 'plantation_worker', title: 'Plantation Worker', wage: 19.00, days: [1,2,3,4,5,6] },
  { id: 'estate_manager', title: 'Estate Manager', wage: 35.00, days: [1,2,3,4,5] },
  { id: 'agronomist', title: 'Agronomist', wage: 33.00, days: [1,2,3,4,5] },
  { id: 'agriculture_officer', title: 'Agriculture Officer', wage: 30.00, days: [1,2,3,4,5] },

  // 🛒 9. Sales & Marketing
  { id: 'salesperson', title: 'Salesperson', wage: 25.00, days: [1,2,3,4,5,6] },
  { id: 'marketing_officer', title: 'Marketing Officer', wage: 30.00, days: [1,2,3,4,5] },
  { id: 'sales_manager', title: 'Sales Manager', wage: 45.00, days: [1,2,3,4,5] },
  { id: 'promoter', title: 'Promoter', wage: 20.00, days: [5,6,0] },
  { id: 'digital_marketer', title: 'Digital Marketer', wage: 35.00, days: [1,2,3,4,5] },
  { id: 'ecommerce_manager', title: 'E-commerce Manager', wage: 40.00, days: [1,2,3,4,5] },
  { id: 'telemarketer', title: 'Telemarketer', wage: 24.00, days: [1,2,3,4,5] },
  { id: 'copywriter', title: 'Copywriter', wage: 28.00, days: [1,2,3,4,5] },

  // 🏨 10. Hospitality & Tourism
  { id: 'chef', title: 'Chef', wage: 33.00, days: [0,1,2,3,4,5,6] },
  { id: 'waiter', title: 'Waiter', wage: 22.00, days: [0,1,2,3,4,5,6] },
  { id: 'hotel_manager', title: 'Hotel Manager', wage: 45.00, days: [1,2,3,4,5,6] },
  { id: 'bellboy', title: 'Bellboy', wage: 18.00, days: [0,1,2,3,4,5,6] },
  { id: 'tour_guide', title: 'Tour Guide', wage: 30.00, days: [5,6,0] },
  { id: 'front_desk', title: 'Front Desk Officer', wage: 25.00, days: [0,1,2,3,4,5,6] },
  { id: 'event_planner', title: 'Event Planner', wage: 35.00, days: [1,2,3,4,5,6] },
  { id: 'barista', title: 'Barista', wage: 23.00, days: [0,1,2,3,4,5,6] },

  // 🎨 11. Arts, Design & Media
  { id: 'graphic_designer', title: 'Graphic Designer', wage: 30.00, days: [1,2,3,4,5] },
  { id: 'fashion_designer', title: 'Fashion Designer', wage: 32.00, days: [1,2,3,4,5] },
  { id: 'artist', title: 'Artist', wage: 28.00, days: [1,2,3,4,5,6] },
  { id: 'photographer', title: 'Photographer', wage: 27.00, days: [5,6,0] },
  { id: 'videographer', title: 'Videographer', wage: 29.00, days: [5,6,0] },
  { id: 'video_editor', title: 'Video Editor', wage: 28.00, days: [1,2,3,4,5] },
  { id: 'script_writer', title: 'Script Writer', wage: 30.00, days: [1,2,3,4,5] },
  { id: 'journalist', title: 'Journalist', wage: 33.00, days: [1,2,3,4,5] },
  { id: 'editor', title: 'Editor', wage: 32.00, days: [1,2,3,4,5] },
  { id: 'art_director', title: 'Art Director', wage: 40.00, days: [1,2,3,4,5] },

  // ⚖️ 12. Law & Security
  { id: 'lawyer', title: 'Lawyer', wage: 55.00, days: [1,2,3,4,5] },
  { id: 'judge', title: 'Judge', wage: 70.00, days: [1,2,3,4,5] },
  { id: 'police_officer', title: 'Police Officer', wage: 35.00, days: [0,1,2,3,4,5,6] },
  { id: 'soldier', title: 'Soldier', wage: 38.00, days: [0,1,2,3,4,5,6] },
  { id: 'security_guard', title: 'Security Guard', wage: 25.00, days: [0,1,2,3,4,5,6] },
  { id: 'immigration_officer', title: 'Immigration Officer', wage: 33.00, days: [1,2,3,4,5] },
  { id: 'customs_officer', title: 'Customs Officer', wage: 33.00, days: [1,2,3,4,5] },

  // 🧑‍💼 13. Business & Finance
  { id: 'entrepreneur', title: 'Entrepreneur', wage: 50.00, days: [1,2,3,4,5,6] },
  { id: 'bank_officer', title: 'Bank Officer', wage: 35.00, days: [1,2,3,4,5] },
  { id: 'financial_consultant', title: 'Financial Consultant', wage: 40.00, days: [1,2,3,4,5] },
  { id: 'stock_broker', title: 'Stock Broker', wage: 45.00, days: [1,2,3,4,5] },
  { id: 'economist', title: 'Economist', wage: 48.00, days: [1,2,3,4,5] },
  { id: 'account_manager', title: 'Account Manager', wage: 38.00, days: [1,2,3,4,5] },
  { id: 'insurance_agent', title: 'Insurance Agent', wage: 30.00, days: [1,2,3,4,5,6] },

  // 🚚 14. Logistics & Transportation
  { id: 'lorry_driver2', title: 'Lorry Driver', wage: 25.00, days: [1,2,3,4,5,6] },
  { id: 'taxi_driver', title: 'Taxi / E-hailing Driver', wage: 26.00, days: [0,1,2,3,4,5,6] },
  { id: 'ship_captain', title: 'Ship Captain', wage: 60.00, days: [0,1,2,3,4,5,6] },
  { id: 'pilot', title: 'Pilot', wage: 80.00, days: [1,2,3,4,5,6] },
  { id: 'flight_attendant', title: 'Flight Attendant', wage: 45.00, days: [1,2,3,4,5,6] },
  { id: 'logistics_manager', title: 'Logistics Manager', wage: 40.00, days: [1,2,3,4,5] },
  { id: 'courier', title: 'Courier', wage: 22.00, days: [1,2,3,4,5,6] },

  // 🧱 15. Construction & Infrastructure
  { id: 'contractor', title: 'Contractor', wage: 50.00, days: [1,2,3,4,5,6] },
  { id: 'architect', title: 'Architect', wage: 55.00, days: [1,2,3,4,5] },
  { id: 'site_engineer', title: 'Site Engineer', wage: 42.00, days: [1,2,3,4,5,6] },
  { id: 'construction_worker', title: 'Construction Worker', wage: 25.00, days: [1,2,3,4,5,6] },
  { id: 'bricklayer', title: 'Bricklayer', wage: 24.00, days: [1,2,3,4,5,6] },
  { id: 'drafter', title: 'Draftsman', wage: 28.00, days: [1,2,3,4,5] },
  { id: 'project_manager', title: 'Project Manager', wage: 48.00, days: [1,2,3,4,5] },

  // 🐾 16. Animal & Environment
  { id: 'veterinarian', title: 'Veterinarian', wage: 45.00, days: [1,2,3,4,5,6] },
  { id: 'zookeeper', title: 'Zookeeper', wage: 26.00, days: [0,1,2,3,4,5,6] },
  { id: 'zoologist', title: 'Zoologist', wage: 36.00, days: [1,2,3,4,5] },
  { id: 'wildlife_biologist', title: 'Wildlife Biologist', wage: 35.00, days: [1,2,3,4,5] },
  { id: 'environment_officer', title: 'Environment Officer', wage: 33.00, days: [1,2,3,4,5] },
  { id: 'animal_rescuer', title: 'Animal Rescuer', wage: 24.00, days: [0,1,2,3,4,5,6] },

  // 🎭 17. Entertainment & Sports
  { id: 'actor', title: 'Actor', wage: 40.00, days: [5,6,0] },
  { id: 'singer', title: 'Singer', wage: 38.00, days: [5,6,0] },
  { id: 'musician', title: 'Musician', wage: 36.00, days: [5,6,0] },
  { id: 'athlete', title: 'Athlete', wage: 42.00, days: [1,2,3,4,5,6] },
  { id: 'coach', title: 'Coach', wage: 35.00, days: [1,2,3,4,5] },
  { id: 'sports_commentator', title: 'Sports Commentator', wage: 30.00, days: [5,6,0] },
  { id: 'film_director', title: 'Film Director', wage: 60.00, days: [1,2,3,4,5] },

  // 🧘 18. Social & Community
  { id: 'social_worker', title: 'Social Worker', wage: 28.00, days: [1,2,3,4,5] },
  { id: 'counselor', title: 'Counselor', wage: 32.00, days: [1,2,3,4,5] },
  { id: 'volunteer', title: 'Volunteer', wage: 10.00, days: [0,1,2,3,4,5,6] },
  { id: 'ngo_officer', title: 'NGO Officer', wage: 29.00, days: [1,2,3,4,5] },
  { id: 'community_manager', title: 'Community Manager', wage: 34.00, days: [1,2,3,4,5] },

];

// Export to main script
if (typeof window !== 'undefined') {
  window.jobsList = jobsList;
}
