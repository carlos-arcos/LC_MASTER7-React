export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export const createDefaultMemberEntity = () => ({
  id: -1,
  login: '',
  avatar_url: '',
});

export interface MemberEntityDetail {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  type: string;
  name: string;
  company: string;
  public_repos: number;
}

export const createDefaultMemberEntityDetail = () => ({
  id: -1,
  login: '',
  avatar_url: '',
  url: '',
  type: '',
  name: '',
  company: '',
  public_repos: -1,
});