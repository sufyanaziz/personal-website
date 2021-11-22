import constant from '../../constant';

const mainApi = (req, res) => {
  const data = {
    credential: constant.CREDENTIALS,
    workExperience: constant.WORK_EXPERIENCE,
    skills: constant.SKILL_DATA,
    projects: constant.PROJECT_DATA,
    socialMedia: constant.SOCIAL_MEDIA,
  };
  const payload = {
    status: 'success',
    statusCode: '200',
    data,
  };

  return res.status(200).json(payload);
};

export default mainApi;
