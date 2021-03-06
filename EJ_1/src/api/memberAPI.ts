import {MemberEntity, createDefaultMemberEntity, MemberEntityDetail, createDefaultMemberEntityDetail } from '../model/member';

class MemberAPI {

  // Just return a copy of the mock data
  getAllMembers(organizationName : string) : Promise<MemberEntity[]> {
    const gitHubMembersUrl : string = `https://api.github.com/orgs/${organizationName}/members`;

    return fetch(gitHubMembersUrl)
    .then((response) => this.checkStatus(response))
    .then((response) => this.parseJSON(response))
    .then((data) => this.resolveMembers(data))
  }

  getMemberDetail(loginName: string): Promise<MemberEntityDetail> {
    const gitHubMemberDetailUrl: string = `https://api.github.com/users/${loginName}`;

    return fetch(gitHubMemberDetailUrl)
    .then((Response) => this.checkStatus(Response))
    .then((response) => this.parseJSON(response))
    .then((data) => this.resolveMemberDetail(data))
  }

  private checkStatus(response : Response) : Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      let error = new Error(response.statusText);
      throw error;
    }
  }

  private parseJSON(response : Response) : any {
    return response.json();
  }

  private resolveMembers (data : any) : Promise<MemberEntity[]> {

    const members = data.map((gitHubMember) => {
      var member : MemberEntity = createDefaultMemberEntity();

      member.id = gitHubMember.id;
      member.login = gitHubMember.login;
      member.avatar_url = gitHubMember.avatar_url;

      return member;
    });
    return Promise.resolve(members);
  }

  private resolveMemberDetail (data: any): Promise<MemberEntityDetail> {
      var member: MemberEntityDetail = createDefaultMemberEntityDetail();

      member.id = data.id;
      member.login = data.login;
      member.avatar_url = data.avatar_url;
      member.url = data.url;
      member.type = data.type;
      member.name = data.name;
      member.company = data.company;
      member.public_repos = data.public_repos;

    return Promise.resolve(member);
  }
}

export const memberAPI = new MemberAPI();
