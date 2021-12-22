import React from "react";
import { CommunityContext } from "../../rscommunity/CommunityContext";
import { CommunitySidebarLayout } from "../../rscommunity/CommunitySidebarLayout";
import { CommunitySignInPage } from "../../rscommunity/CommunitySignInPage";

function ProfilePage(): JSX.Element {
  const context: CommunityContext = new CommunityContext();
  if (!context.loggedInUser) {
    return <CommunitySignInPage context={context} />;
  }

  return (
    <CommunitySidebarLayout context={context} currentPage="profile">
      <div>You are logged in as {context.loggedInUser}</div>
    </CommunitySidebarLayout>
  );
}

export default ProfilePage;
