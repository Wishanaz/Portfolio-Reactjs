import "./ProfileSidebar.scss";

const ProfileSidebar = () => {
  return (
    <div className="profile-sidebar">
      {/* Profile Image */}
      <div className="profile-img">
        <img
          src="https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Wisha Naz"
        />
      </div>

      {/* Username */}
      <h2>Wisha Naz</h2>

      {/* Tagline / pronouns */}
      <span className="tagline">she/her</span>

      {/* About / description */}
      <p className="about">
        Passionate web developer exploring React, Node.js and creative UI
        design.
      </p>
    </div>
  );
};

export default ProfileSidebar;
