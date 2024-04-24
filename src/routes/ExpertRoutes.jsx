import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExpertDashboard from '../pages/Experts/ExpertDashboard';
import ExpertVerification from '../pages/Experts/ExpertVerification';
import ExpertVerification2 from '../pages/Experts/ExpertVerification2';
import ExpertVerification3 from '../pages/Experts/ExpertVerification3';


import ExpertLogin from '../pages/Experts/ExpertLogin';
import ExpertVerificationsucess from '../pages/Experts/ExpertVerificationsucess';

function ExpertRoutes() {
  return (
    <Routes>
      <Route path="/experts" element={<ExpertDashboard />} />
      <Route path="/experts/verification" element={<ExpertVerification />} />
      <Route path="/experts/regForm2/:id" element={<ExpertVerification2 />} />
      <Route path="/experts/regForm3/:id" element={<ExpertVerification3 />} />
      <Route path="/experts/success" element={<ExpertVerificationsucess />} />



      <Route path="/experts/login" element={<ExpertLogin/>} />
    </Routes>
  );
}

export default ExpertRoutes;
