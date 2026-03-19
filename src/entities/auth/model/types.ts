import { ApiResponse } from '@/shared/types';

export interface OAuthSignInReqType {
  authCode: string;
  redirectUri: string;
}

export interface OAuthSignInType {
  accessToken: string;
}

export type OAuthSignInResponseType = ApiResponse<OAuthSignInType>;

export type AccountRoleType = 'ROOT' | 'ADMIN' | 'USER';

export type ClubType = 'MAJOR_CLUB' | 'AUTONOMOUS_CLUB';

export type StudentSexType = 'MAN' | 'WOMAN';

export type StudentMajorType = 'SW_DEVELOPMENT' | 'SMART_IOT' | 'AI';

export type StudentRoleType =
  | 'STUDENT_COUNCIL'
  | 'DORMITORY_MANAGER'
  | 'GENERAL_STUDENT'
  | 'GRADUATE'
  | 'WITHDRAWN';

export interface UserInfoClubType {
  id: number;
  name: string;
  type: ClubType;
}

export interface UserInfoStudentType {
  id: number;
  name: string;
  sex: StudentSexType;
  email: string;
  role: StudentRoleType;
  grade?: number;
  classNum?: number;
  number?: number;
  studentNumber?: number;
  major?: StudentMajorType;
  dormitoryFloor?: number;
  dormitoryRoom?: number;
  majorClub?: UserInfoClubType;
  autonomousClub?: UserInfoClubType;
}

export interface UserInfoType {
  id: number;
  email: string;
  role: AccountRoleType;
  isStudent: boolean;
  student?: UserInfoStudentType | null;
}

export type UserInfoResponseType = ApiResponse<UserInfoType>;
