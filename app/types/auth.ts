export interface CredentialsData {
	id: string;
	username: string;
	is_active: boolean;
	token: string;
	refresh_token: string;

  is_new_user?: boolean
  github_username?: string
  google_email?: string
}
