import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  bytea: { input: any; output: any; }
  citext: { input: string; output: string; }
  float8: { input: any; output: any; }
  geography: { input: any; output: any; }
  geometry: { input: any; output: any; }
  jsonb: { input: Record<string, unknown> | Array<unknown>; output: Record<string, unknown> | Array<unknown>; }
  numeric: { input: any; output: any; }
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type ClubFeedClub = {
  __typename?: 'ClubFeedClub';
  name: Scalars['String']['output'];
};

export type ClubFeedCommentUser = {
  __typename?: 'ClubFeedCommentUser';
  avatarUrl: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
};

export type ClubFeedComments = {
  __typename?: 'ClubFeedComments';
  body: Scalars['String']['output'];
  child_count: Scalars['Int']['output'];
  datetime: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  liked_by_user: Scalars['Boolean']['output'];
  likes_count: Scalars['Int']['output'];
  reaction_id: Scalars['uuid']['output'];
  user: ClubFeedCommentUser;
};

export type ClubFeedOutput = {
  __typename?: 'ClubFeedOutput';
  body: Scalars['String']['output'];
  club?: Maybe<ClubFeedClub>;
  comment_count: Scalars['Int']['output'];
  datetime: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  image_ids: Array<Scalars['String']['output']>;
  liked_by_user: Scalars['Boolean']['output'];
  likes_count: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  user?: Maybe<ClubFeedUser>;
};

export type ClubFeedUser = {
  __typename?: 'ClubFeedUser';
  avatarUrl: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
};

export enum ClubUserOrderByEnum {
  DisplayNameAsc = 'DISPLAY_NAME_ASC',
  DisplayNameDesc = 'DISPLAY_NAME_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  LastSeenAsc = 'LAST_SEEN_ASC',
  LastSeenDesc = 'LAST_SEEN_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC'
}

export type GetClubMembersOutput = {
  __typename?: 'GetClubMembersOutput';
  user_club_relation: Array<UserClubRelation>;
  user_club_relation_aggregate: UserClubRelationAggregate;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  avatarUrl: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastSeen: Scalars['timestamptz']['output'];
};

export type UserClubRelation = {
  __typename?: 'UserClubRelation';
  role: Scalars['String']['output'];
  user: User;
};

export type UserClubRelationAggregate = {
  __typename?: 'UserClubRelationAggregate';
  aggregate: Aggregate;
};

/** columns and relationships of "_enumtable.document_status" */
export type _Enumtable_Document_Status = {
  __typename?: '_enumtable_document_status';
  comment?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  documents: Array<Documents>;
  /** An aggregate relationship */
  documents_aggregate: Documents_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "_enumtable.document_status" */
export type _Enumtable_Document_StatusDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


/** columns and relationships of "_enumtable.document_status" */
export type _Enumtable_Document_StatusDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};

/** aggregated selection of "_enumtable.document_status" */
export type _Enumtable_Document_Status_Aggregate = {
  __typename?: '_enumtable_document_status_aggregate';
  aggregate?: Maybe<_Enumtable_Document_Status_Aggregate_Fields>;
  nodes: Array<_Enumtable_Document_Status>;
};

/** aggregate fields of "_enumtable.document_status" */
export type _Enumtable_Document_Status_Aggregate_Fields = {
  __typename?: '_enumtable_document_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<_Enumtable_Document_Status_Max_Fields>;
  min?: Maybe<_Enumtable_Document_Status_Min_Fields>;
};


/** aggregate fields of "_enumtable.document_status" */
export type _Enumtable_Document_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Enumtable_Document_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "_enumtable.document_status". All fields are combined with a logical 'AND'. */
export type _Enumtable_Document_Status_Bool_Exp = {
  _and?: InputMaybe<Array<_Enumtable_Document_Status_Bool_Exp>>;
  _not?: InputMaybe<_Enumtable_Document_Status_Bool_Exp>;
  _or?: InputMaybe<Array<_Enumtable_Document_Status_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  documents?: InputMaybe<Documents_Bool_Exp>;
  documents_aggregate?: InputMaybe<Documents_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "_enumtable.document_status" */
export enum _Enumtable_Document_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  DocumentStatusPkey = 'document_status_pkey'
}

export enum _Enumtable_Document_Status_Enum {
  /** Document got approved */
  Approved = 'APPROVED',
  /** Requires review */
  Pending = 'PENDING',
  /** Document got rejected see reject reason */
  Rejected = 'REJECTED'
}

/** Boolean expression to compare columns of type "_enumtable_document_status_enum". All fields are combined with logical 'AND'. */
export type _Enumtable_Document_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<_Enumtable_Document_Status_Enum>;
  _in?: InputMaybe<Array<_Enumtable_Document_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<_Enumtable_Document_Status_Enum>;
  _nin?: InputMaybe<Array<_Enumtable_Document_Status_Enum>>;
};

/** input type for inserting data into table "_enumtable.document_status" */
export type _Enumtable_Document_Status_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Documents_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type _Enumtable_Document_Status_Max_Fields = {
  __typename?: '_enumtable_document_status_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type _Enumtable_Document_Status_Min_Fields = {
  __typename?: '_enumtable_document_status_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "_enumtable.document_status" */
export type _Enumtable_Document_Status_Mutation_Response = {
  __typename?: '_enumtable_document_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<_Enumtable_Document_Status>;
};

/** on_conflict condition type for table "_enumtable.document_status" */
export type _Enumtable_Document_Status_On_Conflict = {
  constraint: _Enumtable_Document_Status_Constraint;
  update_columns?: Array<_Enumtable_Document_Status_Update_Column>;
  where?: InputMaybe<_Enumtable_Document_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "_enumtable.document_status". */
export type _Enumtable_Document_Status_Order_By = {
  comment?: InputMaybe<Order_By>;
  documents_aggregate?: InputMaybe<Documents_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _enumtable.document_status */
export type _Enumtable_Document_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "_enumtable.document_status" */
export enum _Enumtable_Document_Status_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "_enumtable.document_status" */
export type _Enumtable_Document_Status_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "_enumtable_document_status" */
export type _Enumtable_Document_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _Enumtable_Document_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _Enumtable_Document_Status_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "_enumtable.document_status" */
export enum _Enumtable_Document_Status_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type _Enumtable_Document_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<_Enumtable_Document_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: _Enumtable_Document_Status_Bool_Exp;
};

/** columns and relationships of "_enumtable.document_type" */
export type _Enumtable_Document_Type = {
  __typename?: '_enumtable_document_type';
  comment?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  documents: Array<Documents>;
  /** An aggregate relationship */
  documents_aggregate: Documents_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "_enumtable.document_type" */
export type _Enumtable_Document_TypeDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


/** columns and relationships of "_enumtable.document_type" */
export type _Enumtable_Document_TypeDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};

/** aggregated selection of "_enumtable.document_type" */
export type _Enumtable_Document_Type_Aggregate = {
  __typename?: '_enumtable_document_type_aggregate';
  aggregate?: Maybe<_Enumtable_Document_Type_Aggregate_Fields>;
  nodes: Array<_Enumtable_Document_Type>;
};

/** aggregate fields of "_enumtable.document_type" */
export type _Enumtable_Document_Type_Aggregate_Fields = {
  __typename?: '_enumtable_document_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<_Enumtable_Document_Type_Max_Fields>;
  min?: Maybe<_Enumtable_Document_Type_Min_Fields>;
};


/** aggregate fields of "_enumtable.document_type" */
export type _Enumtable_Document_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Enumtable_Document_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "_enumtable.document_type". All fields are combined with a logical 'AND'. */
export type _Enumtable_Document_Type_Bool_Exp = {
  _and?: InputMaybe<Array<_Enumtable_Document_Type_Bool_Exp>>;
  _not?: InputMaybe<_Enumtable_Document_Type_Bool_Exp>;
  _or?: InputMaybe<Array<_Enumtable_Document_Type_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  documents?: InputMaybe<Documents_Bool_Exp>;
  documents_aggregate?: InputMaybe<Documents_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "_enumtable.document_type" */
export enum _Enumtable_Document_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  DocumentTypePkey = 'document_type_pkey'
}

export enum _Enumtable_Document_Type_Enum {
  /** The cover image of a club to show a preview in e.g. home screen */
  ClubCover = 'CLUB_COVER',
  /** The logo image of a club to show a preview in e.g. home screen */
  ClubLogo = 'CLUB_LOGO',
  /** The fishing license of the user */
  UserFishingLicense = 'USER_FISHING_LICENSE'
}

/** Boolean expression to compare columns of type "_enumtable_document_type_enum". All fields are combined with logical 'AND'. */
export type _Enumtable_Document_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<_Enumtable_Document_Type_Enum>;
  _in?: InputMaybe<Array<_Enumtable_Document_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<_Enumtable_Document_Type_Enum>;
  _nin?: InputMaybe<Array<_Enumtable_Document_Type_Enum>>;
};

/** input type for inserting data into table "_enumtable.document_type" */
export type _Enumtable_Document_Type_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Documents_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type _Enumtable_Document_Type_Max_Fields = {
  __typename?: '_enumtable_document_type_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type _Enumtable_Document_Type_Min_Fields = {
  __typename?: '_enumtable_document_type_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "_enumtable.document_type" */
export type _Enumtable_Document_Type_Mutation_Response = {
  __typename?: '_enumtable_document_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<_Enumtable_Document_Type>;
};

/** on_conflict condition type for table "_enumtable.document_type" */
export type _Enumtable_Document_Type_On_Conflict = {
  constraint: _Enumtable_Document_Type_Constraint;
  update_columns?: Array<_Enumtable_Document_Type_Update_Column>;
  where?: InputMaybe<_Enumtable_Document_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "_enumtable.document_type". */
export type _Enumtable_Document_Type_Order_By = {
  comment?: InputMaybe<Order_By>;
  documents_aggregate?: InputMaybe<Documents_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _enumtable.document_type */
export type _Enumtable_Document_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "_enumtable.document_type" */
export enum _Enumtable_Document_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "_enumtable.document_type" */
export type _Enumtable_Document_Type_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "_enumtable_document_type" */
export type _Enumtable_Document_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _Enumtable_Document_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _Enumtable_Document_Type_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "_enumtable.document_type" */
export enum _Enumtable_Document_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type _Enumtable_Document_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<_Enumtable_Document_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: _Enumtable_Document_Type_Bool_Exp;
};

/** columns and relationships of "_enumtable.fish_type" */
export type _Enumtable_Fish_Type = {
  __typename?: '_enumtable_fish_type';
  comment?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

/** aggregated selection of "_enumtable.fish_type" */
export type _Enumtable_Fish_Type_Aggregate = {
  __typename?: '_enumtable_fish_type_aggregate';
  aggregate?: Maybe<_Enumtable_Fish_Type_Aggregate_Fields>;
  nodes: Array<_Enumtable_Fish_Type>;
};

/** aggregate fields of "_enumtable.fish_type" */
export type _Enumtable_Fish_Type_Aggregate_Fields = {
  __typename?: '_enumtable_fish_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<_Enumtable_Fish_Type_Max_Fields>;
  min?: Maybe<_Enumtable_Fish_Type_Min_Fields>;
};


/** aggregate fields of "_enumtable.fish_type" */
export type _Enumtable_Fish_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Enumtable_Fish_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "_enumtable.fish_type". All fields are combined with a logical 'AND'. */
export type _Enumtable_Fish_Type_Bool_Exp = {
  _and?: InputMaybe<Array<_Enumtable_Fish_Type_Bool_Exp>>;
  _not?: InputMaybe<_Enumtable_Fish_Type_Bool_Exp>;
  _or?: InputMaybe<Array<_Enumtable_Fish_Type_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "_enumtable.fish_type" */
export enum _Enumtable_Fish_Type_Constraint {
  /** unique or primary key constraint on columns "type" */
  FishTypePkey = 'fish_type_pkey'
}

/** input type for inserting data into table "_enumtable.fish_type" */
export type _Enumtable_Fish_Type_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type _Enumtable_Fish_Type_Max_Fields = {
  __typename?: '_enumtable_fish_type_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type _Enumtable_Fish_Type_Min_Fields = {
  __typename?: '_enumtable_fish_type_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "_enumtable.fish_type" */
export type _Enumtable_Fish_Type_Mutation_Response = {
  __typename?: '_enumtable_fish_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<_Enumtable_Fish_Type>;
};

/** on_conflict condition type for table "_enumtable.fish_type" */
export type _Enumtable_Fish_Type_On_Conflict = {
  constraint: _Enumtable_Fish_Type_Constraint;
  update_columns?: Array<_Enumtable_Fish_Type_Update_Column>;
  where?: InputMaybe<_Enumtable_Fish_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "_enumtable.fish_type". */
export type _Enumtable_Fish_Type_Order_By = {
  comment?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _enumtable.fish_type */
export type _Enumtable_Fish_Type_Pk_Columns_Input = {
  type: Scalars['String']['input'];
};

/** select columns of table "_enumtable.fish_type" */
export enum _Enumtable_Fish_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "_enumtable.fish_type" */
export type _Enumtable_Fish_Type_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "_enumtable_fish_type" */
export type _Enumtable_Fish_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _Enumtable_Fish_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _Enumtable_Fish_Type_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "_enumtable.fish_type" */
export enum _Enumtable_Fish_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Type = 'type'
}

export type _Enumtable_Fish_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<_Enumtable_Fish_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: _Enumtable_Fish_Type_Bool_Exp;
};

/** columns and relationships of "_enumtable.report_reason" */
export type _Enumtable_Report_Reason = {
  __typename?: '_enumtable_report_reason';
  comment?: Maybe<Scalars['String']['output']>;
  reason: Scalars['String']['output'];
};

/** aggregated selection of "_enumtable.report_reason" */
export type _Enumtable_Report_Reason_Aggregate = {
  __typename?: '_enumtable_report_reason_aggregate';
  aggregate?: Maybe<_Enumtable_Report_Reason_Aggregate_Fields>;
  nodes: Array<_Enumtable_Report_Reason>;
};

/** aggregate fields of "_enumtable.report_reason" */
export type _Enumtable_Report_Reason_Aggregate_Fields = {
  __typename?: '_enumtable_report_reason_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<_Enumtable_Report_Reason_Max_Fields>;
  min?: Maybe<_Enumtable_Report_Reason_Min_Fields>;
};


/** aggregate fields of "_enumtable.report_reason" */
export type _Enumtable_Report_Reason_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Enumtable_Report_Reason_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "_enumtable.report_reason". All fields are combined with a logical 'AND'. */
export type _Enumtable_Report_Reason_Bool_Exp = {
  _and?: InputMaybe<Array<_Enumtable_Report_Reason_Bool_Exp>>;
  _not?: InputMaybe<_Enumtable_Report_Reason_Bool_Exp>;
  _or?: InputMaybe<Array<_Enumtable_Report_Reason_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  reason?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "_enumtable.report_reason" */
export enum _Enumtable_Report_Reason_Constraint {
  /** unique or primary key constraint on columns "reason" */
  ReportReasonPkey = 'report_reason_pkey'
}

export enum _Enumtable_Report_Reason_Enum {
  HateSpeech = 'HATE_SPEECH',
  Misinformation = 'MISINFORMATION',
  Other = 'OTHER',
  SexualContent = 'SEXUAL_CONTENT',
  Spam = 'SPAM',
  Violence = 'VIOLENCE'
}

/** Boolean expression to compare columns of type "_enumtable_report_reason_enum". All fields are combined with logical 'AND'. */
export type _Enumtable_Report_Reason_Enum_Comparison_Exp = {
  _eq?: InputMaybe<_Enumtable_Report_Reason_Enum>;
  _in?: InputMaybe<Array<_Enumtable_Report_Reason_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<_Enumtable_Report_Reason_Enum>;
  _nin?: InputMaybe<Array<_Enumtable_Report_Reason_Enum>>;
};

/** input type for inserting data into table "_enumtable.report_reason" */
export type _Enumtable_Report_Reason_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type _Enumtable_Report_Reason_Max_Fields = {
  __typename?: '_enumtable_report_reason_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type _Enumtable_Report_Reason_Min_Fields = {
  __typename?: '_enumtable_report_reason_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "_enumtable.report_reason" */
export type _Enumtable_Report_Reason_Mutation_Response = {
  __typename?: '_enumtable_report_reason_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<_Enumtable_Report_Reason>;
};

/** on_conflict condition type for table "_enumtable.report_reason" */
export type _Enumtable_Report_Reason_On_Conflict = {
  constraint: _Enumtable_Report_Reason_Constraint;
  update_columns?: Array<_Enumtable_Report_Reason_Update_Column>;
  where?: InputMaybe<_Enumtable_Report_Reason_Bool_Exp>;
};

/** Ordering options when selecting data from "_enumtable.report_reason". */
export type _Enumtable_Report_Reason_Order_By = {
  comment?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _enumtable.report_reason */
export type _Enumtable_Report_Reason_Pk_Columns_Input = {
  reason: Scalars['String']['input'];
};

/** select columns of table "_enumtable.report_reason" */
export enum _Enumtable_Report_Reason_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Reason = 'reason'
}

/** input type for updating data in table "_enumtable.report_reason" */
export type _Enumtable_Report_Reason_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "_enumtable_report_reason" */
export type _Enumtable_Report_Reason_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _Enumtable_Report_Reason_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _Enumtable_Report_Reason_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "_enumtable.report_reason" */
export enum _Enumtable_Report_Reason_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Reason = 'reason'
}

export type _Enumtable_Report_Reason_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<_Enumtable_Report_Reason_Set_Input>;
  /** filter the rows which have to be updated */
  where: _Enumtable_Report_Reason_Bool_Exp;
};

/** columns and relationships of "_enumtable.user_club_role" */
export type _Enumtable_User_Club_Role = {
  __typename?: '_enumtable_user_club_role';
  comment?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
};

/** aggregated selection of "_enumtable.user_club_role" */
export type _Enumtable_User_Club_Role_Aggregate = {
  __typename?: '_enumtable_user_club_role_aggregate';
  aggregate?: Maybe<_Enumtable_User_Club_Role_Aggregate_Fields>;
  nodes: Array<_Enumtable_User_Club_Role>;
};

/** aggregate fields of "_enumtable.user_club_role" */
export type _Enumtable_User_Club_Role_Aggregate_Fields = {
  __typename?: '_enumtable_user_club_role_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<_Enumtable_User_Club_Role_Max_Fields>;
  min?: Maybe<_Enumtable_User_Club_Role_Min_Fields>;
};


/** aggregate fields of "_enumtable.user_club_role" */
export type _Enumtable_User_Club_Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Enumtable_User_Club_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "_enumtable.user_club_role". All fields are combined with a logical 'AND'. */
export type _Enumtable_User_Club_Role_Bool_Exp = {
  _and?: InputMaybe<Array<_Enumtable_User_Club_Role_Bool_Exp>>;
  _not?: InputMaybe<_Enumtable_User_Club_Role_Bool_Exp>;
  _or?: InputMaybe<Array<_Enumtable_User_Club_Role_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "_enumtable.user_club_role" */
export enum _Enumtable_User_Club_Role_Constraint {
  /** unique or primary key constraint on columns "role" */
  UserClubRolePkey = 'user_club_role_pkey'
}

export enum _Enumtable_User_Club_Role_Enum {
  /** The owner or any other person which should be granted full access to the club settings etc. */
  Admin = 'ADMIN',
  /** A normal member of the club */
  User = 'USER'
}

/** Boolean expression to compare columns of type "_enumtable_user_club_role_enum". All fields are combined with logical 'AND'. */
export type _Enumtable_User_Club_Role_Enum_Comparison_Exp = {
  _eq?: InputMaybe<_Enumtable_User_Club_Role_Enum>;
  _in?: InputMaybe<Array<_Enumtable_User_Club_Role_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<_Enumtable_User_Club_Role_Enum>;
  _nin?: InputMaybe<Array<_Enumtable_User_Club_Role_Enum>>;
};

/** input type for inserting data into table "_enumtable.user_club_role" */
export type _Enumtable_User_Club_Role_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type _Enumtable_User_Club_Role_Max_Fields = {
  __typename?: '_enumtable_user_club_role_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type _Enumtable_User_Club_Role_Min_Fields = {
  __typename?: '_enumtable_user_club_role_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "_enumtable.user_club_role" */
export type _Enumtable_User_Club_Role_Mutation_Response = {
  __typename?: '_enumtable_user_club_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<_Enumtable_User_Club_Role>;
};

/** on_conflict condition type for table "_enumtable.user_club_role" */
export type _Enumtable_User_Club_Role_On_Conflict = {
  constraint: _Enumtable_User_Club_Role_Constraint;
  update_columns?: Array<_Enumtable_User_Club_Role_Update_Column>;
  where?: InputMaybe<_Enumtable_User_Club_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "_enumtable.user_club_role". */
export type _Enumtable_User_Club_Role_Order_By = {
  comment?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _enumtable.user_club_role */
export type _Enumtable_User_Club_Role_Pk_Columns_Input = {
  role: Scalars['String']['input'];
};

/** select columns of table "_enumtable.user_club_role" */
export enum _Enumtable_User_Club_Role_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "_enumtable.user_club_role" */
export type _Enumtable_User_Club_Role_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "_enumtable_user_club_role" */
export type _Enumtable_User_Club_Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _Enumtable_User_Club_Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _Enumtable_User_Club_Role_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "_enumtable.user_club_role" */
export enum _Enumtable_User_Club_Role_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Role = 'role'
}

export type _Enumtable_User_Club_Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<_Enumtable_User_Club_Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: _Enumtable_User_Club_Role_Bool_Exp;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid']['output'];
  options?: Maybe<Scalars['jsonb']['output']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviderRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String']['output'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviders_Bool_Exp;
};

/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes = {
  __typename?: 'authRefreshTokenTypes';
  comment?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** aggregated selection of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate = {
  __typename?: 'authRefreshTokenTypes_aggregate';
  aggregate?: Maybe<AuthRefreshTokenTypes_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokenTypes>;
};

/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_Fields = {
  __typename?: 'authRefreshTokenTypes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRefreshTokenTypes_Max_Fields>;
  min?: Maybe<AuthRefreshTokenTypes_Min_Fields>;
};


/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.refresh_token_types". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokenTypes_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Constraint {
  /** unique or primary key constraint on columns "value" */
  RefreshTokenTypesPkey = 'refresh_token_types_pkey'
}

export enum AuthRefreshTokenTypes_Enum {
  /** Personal access token */
  Pat = 'pat',
  /** Regular refresh token */
  Regular = 'regular'
}

/** Boolean expression to compare columns of type "authRefreshTokenTypes_enum". All fields are combined with logical 'AND'. */
export type AuthRefreshTokenTypes_Enum_Comparison_Exp = {
  _eq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _in?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _nin?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
};

/** input type for inserting data into table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type AuthRefreshTokenTypes_Max_Fields = {
  __typename?: 'authRefreshTokenTypes_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthRefreshTokenTypes_Min_Fields = {
  __typename?: 'authRefreshTokenTypes_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Mutation_Response = {
  __typename?: 'authRefreshTokenTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokenTypes>;
};

/** on_conflict condition type for table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_On_Conflict = {
  constraint: AuthRefreshTokenTypes_Constraint;
  update_columns?: Array<AuthRefreshTokenTypes_Update_Column>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_token_types". */
export type AuthRefreshTokenTypes_Order_By = {
  comment?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_token_types */
export type AuthRefreshTokenTypes_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authRefreshTokenTypes" */
export type AuthRefreshTokenTypes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokenTypes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokenTypes_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type AuthRefreshTokenTypes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokenTypes_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz']['output'];
  expiresAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  type: AuthRefreshTokenTypes_Enum;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};


/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokensMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  refreshTokenHash?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthRefreshTokens_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthRefreshTokens_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthRefreshTokens_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type AuthRefreshTokens_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String']['output'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String']['input'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRoles_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String']['output'];
  providerUserId: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

export type AuthUserProviders_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>;
};

export type AuthUserProviders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserProviders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_user_id", "provider_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  role: Scalars['String']['output'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

export type AuthUserRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>;
};

export type AuthUserRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserRoles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  __typename?: 'authUserSecurityKeys';
  counter: Scalars['bigint']['output'];
  credentialId: Scalars['String']['output'];
  credentialPublicKey?: Maybe<Scalars['bytea']['output']>;
  id: Scalars['uuid']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  transports: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
  __typename?: 'authUserSecurityKeys_aggregate';
  aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>;
  nodes: Array<AuthUserSecurityKeys>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
  __typename?: 'authUserSecurityKeys_aggregate_fields';
  avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserSecurityKeys_Max_Fields>;
  min?: Maybe<AuthUserSecurityKeys_Min_Fields>;
  stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>;
  stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>;
  sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>;
  var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>;
  var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>;
  variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>;
};


/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
  avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
  min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
  stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Arr_Rel_Insert_Input = {
  data: Array<AuthUserSecurityKeys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
  __typename?: 'authUserSecurityKeys_avg_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  credentialId?: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  transports?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserSecurityKeyCredentialIdKey = 'user_security_key_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserSecurityKeysPkey = 'user_security_keys_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
  __typename?: 'authUserSecurityKeys_max_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  credentialId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  transports?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
  __typename?: 'authUserSecurityKeys_min_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  credentialId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  transports?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
  __typename?: 'authUserSecurityKeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
  constraint: AuthUserSecurityKeys_Constraint;
  update_columns?: Array<AuthUserSecurityKeys_Update_Column>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  credentialPublicKey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
  __typename?: 'authUserSecurityKeys_sum_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export type AuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_var_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_var_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
  __typename?: 'authUserSecurityKeys_variance_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  downloadExpiration: Scalars['Int']['output'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String']['output'];
  maxUploadFileSize: Scalars['Int']['output'];
  minUploadFileSize: Scalars['Int']['output'];
  presignedUrlsEnabled: Scalars['Boolean']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  files_aggregate?: InputMaybe<Files_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Buckets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']['input']>;
  _gt?: InputMaybe<Scalars['bytea']['input']>;
  _gte?: InputMaybe<Scalars['bytea']['input']>;
  _in?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bytea']['input']>;
  _lte?: InputMaybe<Scalars['bytea']['input']>;
  _neq?: InputMaybe<Scalars['bytea']['input']>;
  _nin?: InputMaybe<Array<Scalars['bytea']['input']>>;
};

/** columns and relationships of "catches" */
export type Catches = {
  __typename?: 'catches';
  datetime: Scalars['timestamptz']['output'];
  fish_type: Scalars['String']['output'];
  /** An object relationship */
  fishing_day?: Maybe<Fishing_Days>;
  fishing_day_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  image_id?: Maybe<Scalars['uuid']['output']>;
  length: Scalars['numeric']['output'];
  user_id: Scalars['uuid']['output'];
  weight: Scalars['numeric']['output'];
};

/** aggregated selection of "catches" */
export type Catches_Aggregate = {
  __typename?: 'catches_aggregate';
  aggregate?: Maybe<Catches_Aggregate_Fields>;
  nodes: Array<Catches>;
};

export type Catches_Aggregate_Bool_Exp = {
  count?: InputMaybe<Catches_Aggregate_Bool_Exp_Count>;
};

export type Catches_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Catches_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Catches_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "catches" */
export type Catches_Aggregate_Fields = {
  __typename?: 'catches_aggregate_fields';
  avg?: Maybe<Catches_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Catches_Max_Fields>;
  min?: Maybe<Catches_Min_Fields>;
  stddev?: Maybe<Catches_Stddev_Fields>;
  stddev_pop?: Maybe<Catches_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Catches_Stddev_Samp_Fields>;
  sum?: Maybe<Catches_Sum_Fields>;
  var_pop?: Maybe<Catches_Var_Pop_Fields>;
  var_samp?: Maybe<Catches_Var_Samp_Fields>;
  variance?: Maybe<Catches_Variance_Fields>;
};


/** aggregate fields of "catches" */
export type Catches_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Catches_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "catches" */
export type Catches_Aggregate_Order_By = {
  avg?: InputMaybe<Catches_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Catches_Max_Order_By>;
  min?: InputMaybe<Catches_Min_Order_By>;
  stddev?: InputMaybe<Catches_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Catches_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Catches_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Catches_Sum_Order_By>;
  var_pop?: InputMaybe<Catches_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Catches_Var_Samp_Order_By>;
  variance?: InputMaybe<Catches_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "catches" */
export type Catches_Arr_Rel_Insert_Input = {
  data: Array<Catches_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Catches_On_Conflict>;
};

/** aggregate avg on columns */
export type Catches_Avg_Fields = {
  __typename?: 'catches_avg_fields';
  length?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "catches" */
export type Catches_Avg_Order_By = {
  length?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "catches". All fields are combined with a logical 'AND'. */
export type Catches_Bool_Exp = {
  _and?: InputMaybe<Array<Catches_Bool_Exp>>;
  _not?: InputMaybe<Catches_Bool_Exp>;
  _or?: InputMaybe<Array<Catches_Bool_Exp>>;
  datetime?: InputMaybe<Timestamptz_Comparison_Exp>;
  fish_type?: InputMaybe<String_Comparison_Exp>;
  fishing_day?: InputMaybe<Fishing_Days_Bool_Exp>;
  fishing_day_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_id?: InputMaybe<Uuid_Comparison_Exp>;
  length?: InputMaybe<Numeric_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "catches" */
export enum Catches_Constraint {
  /** unique or primary key constraint on columns "id" */
  CatchesPkey = 'catches_pkey'
}

/** input type for incrementing numeric columns in table "catches" */
export type Catches_Inc_Input = {
  length?: InputMaybe<Scalars['numeric']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "catches" */
export type Catches_Insert_Input = {
  datetime?: InputMaybe<Scalars['timestamptz']['input']>;
  fish_type?: InputMaybe<Scalars['String']['input']>;
  fishing_day?: InputMaybe<Fishing_Days_Obj_Rel_Insert_Input>;
  fishing_day_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  length?: InputMaybe<Scalars['numeric']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Catches_Max_Fields = {
  __typename?: 'catches_max_fields';
  datetime?: Maybe<Scalars['timestamptz']['output']>;
  fish_type?: Maybe<Scalars['String']['output']>;
  fishing_day_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  length?: Maybe<Scalars['numeric']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "catches" */
export type Catches_Max_Order_By = {
  datetime?: InputMaybe<Order_By>;
  fish_type?: InputMaybe<Order_By>;
  fishing_day_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  length?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Catches_Min_Fields = {
  __typename?: 'catches_min_fields';
  datetime?: Maybe<Scalars['timestamptz']['output']>;
  fish_type?: Maybe<Scalars['String']['output']>;
  fishing_day_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  length?: Maybe<Scalars['numeric']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "catches" */
export type Catches_Min_Order_By = {
  datetime?: InputMaybe<Order_By>;
  fish_type?: InputMaybe<Order_By>;
  fishing_day_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  length?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "catches" */
export type Catches_Mutation_Response = {
  __typename?: 'catches_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Catches>;
};

/** on_conflict condition type for table "catches" */
export type Catches_On_Conflict = {
  constraint: Catches_Constraint;
  update_columns?: Array<Catches_Update_Column>;
  where?: InputMaybe<Catches_Bool_Exp>;
};

/** Ordering options when selecting data from "catches". */
export type Catches_Order_By = {
  datetime?: InputMaybe<Order_By>;
  fish_type?: InputMaybe<Order_By>;
  fishing_day?: InputMaybe<Fishing_Days_Order_By>;
  fishing_day_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  length?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: catches */
export type Catches_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "catches" */
export enum Catches_Select_Column {
  /** column name */
  Datetime = 'datetime',
  /** column name */
  FishType = 'fish_type',
  /** column name */
  FishingDayId = 'fishing_day_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  Length = 'length',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "catches" */
export type Catches_Set_Input = {
  datetime?: InputMaybe<Scalars['timestamptz']['input']>;
  fish_type?: InputMaybe<Scalars['String']['input']>;
  fishing_day_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  length?: InputMaybe<Scalars['numeric']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Catches_Stddev_Fields = {
  __typename?: 'catches_stddev_fields';
  length?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "catches" */
export type Catches_Stddev_Order_By = {
  length?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Catches_Stddev_Pop_Fields = {
  __typename?: 'catches_stddev_pop_fields';
  length?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "catches" */
export type Catches_Stddev_Pop_Order_By = {
  length?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Catches_Stddev_Samp_Fields = {
  __typename?: 'catches_stddev_samp_fields';
  length?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "catches" */
export type Catches_Stddev_Samp_Order_By = {
  length?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "catches" */
export type Catches_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Catches_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Catches_Stream_Cursor_Value_Input = {
  datetime?: InputMaybe<Scalars['timestamptz']['input']>;
  fish_type?: InputMaybe<Scalars['String']['input']>;
  fishing_day_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  length?: InputMaybe<Scalars['numeric']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Catches_Sum_Fields = {
  __typename?: 'catches_sum_fields';
  length?: Maybe<Scalars['numeric']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "catches" */
export type Catches_Sum_Order_By = {
  length?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** update columns of table "catches" */
export enum Catches_Update_Column {
  /** column name */
  Datetime = 'datetime',
  /** column name */
  FishType = 'fish_type',
  /** column name */
  FishingDayId = 'fishing_day_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  Length = 'length',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Weight = 'weight'
}

export type Catches_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Catches_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Catches_Set_Input>;
  /** filter the rows which have to be updated */
  where: Catches_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Catches_Var_Pop_Fields = {
  __typename?: 'catches_var_pop_fields';
  length?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "catches" */
export type Catches_Var_Pop_Order_By = {
  length?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Catches_Var_Samp_Fields = {
  __typename?: 'catches_var_samp_fields';
  length?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "catches" */
export type Catches_Var_Samp_Order_By = {
  length?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Catches_Variance_Fields = {
  __typename?: 'catches_variance_fields';
  length?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "catches" */
export type Catches_Variance_Order_By = {
  length?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']['input']>;
  _gt?: InputMaybe<Scalars['citext']['input']>;
  _gte?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']['input']>;
  _in?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']['input']>;
  _lt?: InputMaybe<Scalars['citext']['input']>;
  _lte?: InputMaybe<Scalars['citext']['input']>;
  _neq?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']['input']>;
  _nin?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']['input']>;
};

/** columns and relationships of "club_documents" */
export type Club_Documents = {
  __typename?: 'club_documents';
  /** An object relationship */
  club: Clubs;
  club_id: Scalars['uuid']['output'];
  document_status: _Enumtable_Document_Status_Enum;
  document_type: _Enumtable_Document_Type_Enum;
  /** An object relationship */
  file: Files;
  file_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  rejected_reason?: Maybe<Scalars['String']['output']>;
  version: Scalars['bigint']['output'];
};

/** aggregated selection of "club_documents" */
export type Club_Documents_Aggregate = {
  __typename?: 'club_documents_aggregate';
  aggregate?: Maybe<Club_Documents_Aggregate_Fields>;
  nodes: Array<Club_Documents>;
};

export type Club_Documents_Aggregate_Bool_Exp = {
  count?: InputMaybe<Club_Documents_Aggregate_Bool_Exp_Count>;
};

export type Club_Documents_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Club_Documents_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Club_Documents_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "club_documents" */
export type Club_Documents_Aggregate_Fields = {
  __typename?: 'club_documents_aggregate_fields';
  avg?: Maybe<Club_Documents_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Club_Documents_Max_Fields>;
  min?: Maybe<Club_Documents_Min_Fields>;
  stddev?: Maybe<Club_Documents_Stddev_Fields>;
  stddev_pop?: Maybe<Club_Documents_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Club_Documents_Stddev_Samp_Fields>;
  sum?: Maybe<Club_Documents_Sum_Fields>;
  var_pop?: Maybe<Club_Documents_Var_Pop_Fields>;
  var_samp?: Maybe<Club_Documents_Var_Samp_Fields>;
  variance?: Maybe<Club_Documents_Variance_Fields>;
};


/** aggregate fields of "club_documents" */
export type Club_Documents_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Club_Documents_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "club_documents" */
export type Club_Documents_Aggregate_Order_By = {
  avg?: InputMaybe<Club_Documents_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Club_Documents_Max_Order_By>;
  min?: InputMaybe<Club_Documents_Min_Order_By>;
  stddev?: InputMaybe<Club_Documents_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Club_Documents_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Club_Documents_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Club_Documents_Sum_Order_By>;
  var_pop?: InputMaybe<Club_Documents_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Club_Documents_Var_Samp_Order_By>;
  variance?: InputMaybe<Club_Documents_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "club_documents" */
export type Club_Documents_Arr_Rel_Insert_Input = {
  data: Array<Club_Documents_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Club_Documents_On_Conflict>;
};

/** aggregate avg on columns */
export type Club_Documents_Avg_Fields = {
  __typename?: 'club_documents_avg_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "club_documents" */
export type Club_Documents_Avg_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "club_documents". All fields are combined with a logical 'AND'. */
export type Club_Documents_Bool_Exp = {
  _and?: InputMaybe<Array<Club_Documents_Bool_Exp>>;
  _not?: InputMaybe<Club_Documents_Bool_Exp>;
  _or?: InputMaybe<Array<Club_Documents_Bool_Exp>>;
  club?: InputMaybe<Clubs_Bool_Exp>;
  club_id?: InputMaybe<Uuid_Comparison_Exp>;
  document_status?: InputMaybe<_Enumtable_Document_Status_Enum_Comparison_Exp>;
  document_type?: InputMaybe<_Enumtable_Document_Type_Enum_Comparison_Exp>;
  file?: InputMaybe<Files_Bool_Exp>;
  file_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  rejected_reason?: InputMaybe<String_Comparison_Exp>;
  version?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "club_documents" */
export enum Club_Documents_Constraint {
  /** unique or primary key constraint on columns "file_id" */
  ClubDocumentsFileIdKey = 'club_documents_file_id_key',
  /** unique or primary key constraint on columns "id" */
  ClubDocumentsPkey = 'club_documents_pkey'
}

/** input type for incrementing numeric columns in table "club_documents" */
export type Club_Documents_Inc_Input = {
  version?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "club_documents" */
export type Club_Documents_Insert_Input = {
  club?: InputMaybe<Clubs_Obj_Rel_Insert_Input>;
  club_id?: InputMaybe<Scalars['uuid']['input']>;
  document_status?: InputMaybe<_Enumtable_Document_Status_Enum>;
  document_type?: InputMaybe<_Enumtable_Document_Type_Enum>;
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  file_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rejected_reason?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Club_Documents_Max_Fields = {
  __typename?: 'club_documents_max_fields';
  club_id?: Maybe<Scalars['uuid']['output']>;
  file_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  rejected_reason?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "club_documents" */
export type Club_Documents_Max_Order_By = {
  club_id?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rejected_reason?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Club_Documents_Min_Fields = {
  __typename?: 'club_documents_min_fields';
  club_id?: Maybe<Scalars['uuid']['output']>;
  file_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  rejected_reason?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "club_documents" */
export type Club_Documents_Min_Order_By = {
  club_id?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rejected_reason?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "club_documents" */
export type Club_Documents_Mutation_Response = {
  __typename?: 'club_documents_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Club_Documents>;
};

/** input type for inserting object relation for remote table "club_documents" */
export type Club_Documents_Obj_Rel_Insert_Input = {
  data: Club_Documents_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Club_Documents_On_Conflict>;
};

/** on_conflict condition type for table "club_documents" */
export type Club_Documents_On_Conflict = {
  constraint: Club_Documents_Constraint;
  update_columns?: Array<Club_Documents_Update_Column>;
  where?: InputMaybe<Club_Documents_Bool_Exp>;
};

/** Ordering options when selecting data from "club_documents". */
export type Club_Documents_Order_By = {
  club?: InputMaybe<Clubs_Order_By>;
  club_id?: InputMaybe<Order_By>;
  document_status?: InputMaybe<Order_By>;
  document_type?: InputMaybe<Order_By>;
  file?: InputMaybe<Files_Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rejected_reason?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: club_documents */
export type Club_Documents_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "club_documents" */
export enum Club_Documents_Select_Column {
  /** column name */
  ClubId = 'club_id',
  /** column name */
  DocumentStatus = 'document_status',
  /** column name */
  DocumentType = 'document_type',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  RejectedReason = 'rejected_reason',
  /** column name */
  Version = 'version'
}

/** input type for updating data in table "club_documents" */
export type Club_Documents_Set_Input = {
  club_id?: InputMaybe<Scalars['uuid']['input']>;
  document_status?: InputMaybe<_Enumtable_Document_Status_Enum>;
  document_type?: InputMaybe<_Enumtable_Document_Type_Enum>;
  file_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rejected_reason?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Club_Documents_Stddev_Fields = {
  __typename?: 'club_documents_stddev_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "club_documents" */
export type Club_Documents_Stddev_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Club_Documents_Stddev_Pop_Fields = {
  __typename?: 'club_documents_stddev_pop_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "club_documents" */
export type Club_Documents_Stddev_Pop_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Club_Documents_Stddev_Samp_Fields = {
  __typename?: 'club_documents_stddev_samp_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "club_documents" */
export type Club_Documents_Stddev_Samp_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "club_documents" */
export type Club_Documents_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Club_Documents_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Club_Documents_Stream_Cursor_Value_Input = {
  club_id?: InputMaybe<Scalars['uuid']['input']>;
  document_status?: InputMaybe<_Enumtable_Document_Status_Enum>;
  document_type?: InputMaybe<_Enumtable_Document_Type_Enum>;
  file_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rejected_reason?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Club_Documents_Sum_Fields = {
  __typename?: 'club_documents_sum_fields';
  version?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "club_documents" */
export type Club_Documents_Sum_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** update columns of table "club_documents" */
export enum Club_Documents_Update_Column {
  /** column name */
  ClubId = 'club_id',
  /** column name */
  DocumentStatus = 'document_status',
  /** column name */
  DocumentType = 'document_type',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  RejectedReason = 'rejected_reason',
  /** column name */
  Version = 'version'
}

export type Club_Documents_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Club_Documents_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Club_Documents_Set_Input>;
  /** filter the rows which have to be updated */
  where: Club_Documents_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Club_Documents_Var_Pop_Fields = {
  __typename?: 'club_documents_var_pop_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "club_documents" */
export type Club_Documents_Var_Pop_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Club_Documents_Var_Samp_Fields = {
  __typename?: 'club_documents_var_samp_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "club_documents" */
export type Club_Documents_Var_Samp_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Club_Documents_Variance_Fields = {
  __typename?: 'club_documents_variance_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "club_documents" */
export type Club_Documents_Variance_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** columns and relationships of "club_feed" */
export type Club_Feed = {
  __typename?: 'club_feed';
  body: Scalars['String']['output'];
  /** An object relationship */
  club: Clubs;
  club_id: Scalars['uuid']['output'];
  /** A computed field, executes function "club_feed_comment_count" */
  comment_count?: Maybe<Scalars['Int']['output']>;
  datetime: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  image_ids: Array<Scalars['uuid']['output']>;
  /** A computed field, executes function "feed_liked_by_user" */
  liked_by_user?: Maybe<Scalars['Boolean']['output']>;
  /** A computed field, executes function "feed_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "club_feed" */
export type Club_Feed_Aggregate = {
  __typename?: 'club_feed_aggregate';
  aggregate?: Maybe<Club_Feed_Aggregate_Fields>;
  nodes: Array<Club_Feed>;
};

/** aggregate fields of "club_feed" */
export type Club_Feed_Aggregate_Fields = {
  __typename?: 'club_feed_aggregate_fields';
  avg?: Maybe<Club_Feed_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Club_Feed_Max_Fields>;
  min?: Maybe<Club_Feed_Min_Fields>;
  stddev?: Maybe<Club_Feed_Stddev_Fields>;
  stddev_pop?: Maybe<Club_Feed_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Club_Feed_Stddev_Samp_Fields>;
  sum?: Maybe<Club_Feed_Sum_Fields>;
  var_pop?: Maybe<Club_Feed_Var_Pop_Fields>;
  var_samp?: Maybe<Club_Feed_Var_Samp_Fields>;
  variance?: Maybe<Club_Feed_Variance_Fields>;
};


/** aggregate fields of "club_feed" */
export type Club_Feed_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Club_Feed_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Club_Feed_Avg_Fields = {
  __typename?: 'club_feed_avg_fields';
  /** A computed field, executes function "club_feed_comment_count" */
  comment_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "feed_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
};

/** Boolean expression to filter rows from the table "club_feed". All fields are combined with a logical 'AND'. */
export type Club_Feed_Bool_Exp = {
  _and?: InputMaybe<Array<Club_Feed_Bool_Exp>>;
  _not?: InputMaybe<Club_Feed_Bool_Exp>;
  _or?: InputMaybe<Array<Club_Feed_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  club?: InputMaybe<Clubs_Bool_Exp>;
  club_id?: InputMaybe<Uuid_Comparison_Exp>;
  comment_count?: InputMaybe<Int_Comparison_Exp>;
  datetime?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_ids?: InputMaybe<Uuid_Array_Comparison_Exp>;
  liked_by_user?: InputMaybe<Boolean_Comparison_Exp>;
  likes_count?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** columns and relationships of "club_feed_comments" */
export type Club_Feed_Comments = {
  __typename?: 'club_feed_comments';
  body: Scalars['String']['output'];
  /** A computed field, executes function "comment_child_count" */
  child_count?: Maybe<Scalars['Int']['output']>;
  datetime: Scalars['timestamptz']['output'];
  /** An object relationship */
  feed?: Maybe<Club_Feed>;
  id: Scalars['uuid']['output'];
  /** A computed field, executes function "comment_liked_by_user" */
  liked_by_user?: Maybe<Scalars['Boolean']['output']>;
  /** A computed field, executes function "comment_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  parent_comment?: Maybe<Club_Feed_Comments>;
  reaction_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "club_feed_comments" */
export type Club_Feed_Comments_Aggregate = {
  __typename?: 'club_feed_comments_aggregate';
  aggregate?: Maybe<Club_Feed_Comments_Aggregate_Fields>;
  nodes: Array<Club_Feed_Comments>;
};

/** aggregate fields of "club_feed_comments" */
export type Club_Feed_Comments_Aggregate_Fields = {
  __typename?: 'club_feed_comments_aggregate_fields';
  avg?: Maybe<Club_Feed_Comments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Club_Feed_Comments_Max_Fields>;
  min?: Maybe<Club_Feed_Comments_Min_Fields>;
  stddev?: Maybe<Club_Feed_Comments_Stddev_Fields>;
  stddev_pop?: Maybe<Club_Feed_Comments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Club_Feed_Comments_Stddev_Samp_Fields>;
  sum?: Maybe<Club_Feed_Comments_Sum_Fields>;
  var_pop?: Maybe<Club_Feed_Comments_Var_Pop_Fields>;
  var_samp?: Maybe<Club_Feed_Comments_Var_Samp_Fields>;
  variance?: Maybe<Club_Feed_Comments_Variance_Fields>;
};


/** aggregate fields of "club_feed_comments" */
export type Club_Feed_Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Club_Feed_Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Club_Feed_Comments_Avg_Fields = {
  __typename?: 'club_feed_comments_avg_fields';
  /** A computed field, executes function "comment_child_count" */
  child_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "comment_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
};

/** Boolean expression to filter rows from the table "club_feed_comments". All fields are combined with a logical 'AND'. */
export type Club_Feed_Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Club_Feed_Comments_Bool_Exp>>;
  _not?: InputMaybe<Club_Feed_Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Club_Feed_Comments_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  child_count?: InputMaybe<Int_Comparison_Exp>;
  datetime?: InputMaybe<Timestamptz_Comparison_Exp>;
  feed?: InputMaybe<Club_Feed_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  liked_by_user?: InputMaybe<Boolean_Comparison_Exp>;
  likes_count?: InputMaybe<Int_Comparison_Exp>;
  parent_comment?: InputMaybe<Club_Feed_Comments_Bool_Exp>;
  reaction_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "club_feed_comments" */
export enum Club_Feed_Comments_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClubFeedCommentsPkey = 'club_feed_comments_pkey'
}

/** input type for inserting data into table "club_feed_comments" */
export type Club_Feed_Comments_Insert_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  datetime?: InputMaybe<Scalars['timestamptz']['input']>;
  feed?: InputMaybe<Club_Feed_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  parent_comment?: InputMaybe<Club_Feed_Comments_Obj_Rel_Insert_Input>;
  reaction_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Club_Feed_Comments_Max_Fields = {
  __typename?: 'club_feed_comments_max_fields';
  body?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "comment_child_count" */
  child_count?: Maybe<Scalars['Int']['output']>;
  datetime?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** A computed field, executes function "comment_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
  reaction_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Club_Feed_Comments_Min_Fields = {
  __typename?: 'club_feed_comments_min_fields';
  body?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "comment_child_count" */
  child_count?: Maybe<Scalars['Int']['output']>;
  datetime?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** A computed field, executes function "comment_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
  reaction_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "club_feed_comments" */
export type Club_Feed_Comments_Mutation_Response = {
  __typename?: 'club_feed_comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Club_Feed_Comments>;
};

/** input type for inserting object relation for remote table "club_feed_comments" */
export type Club_Feed_Comments_Obj_Rel_Insert_Input = {
  data: Club_Feed_Comments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Club_Feed_Comments_On_Conflict>;
};

/** on_conflict condition type for table "club_feed_comments" */
export type Club_Feed_Comments_On_Conflict = {
  constraint: Club_Feed_Comments_Constraint;
  update_columns?: Array<Club_Feed_Comments_Update_Column>;
  where?: InputMaybe<Club_Feed_Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "club_feed_comments". */
export type Club_Feed_Comments_Order_By = {
  body?: InputMaybe<Order_By>;
  child_count?: InputMaybe<Order_By>;
  datetime?: InputMaybe<Order_By>;
  feed?: InputMaybe<Club_Feed_Order_By>;
  id?: InputMaybe<Order_By>;
  liked_by_user?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  parent_comment?: InputMaybe<Club_Feed_Comments_Order_By>;
  reaction_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: club_feed_comments */
export type Club_Feed_Comments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "club_feed_comments" */
export enum Club_Feed_Comments_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  Datetime = 'datetime',
  /** column name */
  Id = 'id',
  /** column name */
  ReactionId = 'reaction_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "club_feed_comments" */
export type Club_Feed_Comments_Set_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  datetime?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  reaction_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Club_Feed_Comments_Stddev_Fields = {
  __typename?: 'club_feed_comments_stddev_fields';
  /** A computed field, executes function "comment_child_count" */
  child_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "comment_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate stddev_pop on columns */
export type Club_Feed_Comments_Stddev_Pop_Fields = {
  __typename?: 'club_feed_comments_stddev_pop_fields';
  /** A computed field, executes function "comment_child_count" */
  child_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "comment_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate stddev_samp on columns */
export type Club_Feed_Comments_Stddev_Samp_Fields = {
  __typename?: 'club_feed_comments_stddev_samp_fields';
  /** A computed field, executes function "comment_child_count" */
  child_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "comment_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
};

/** Streaming cursor of the table "club_feed_comments" */
export type Club_Feed_Comments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Club_Feed_Comments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Club_Feed_Comments_Stream_Cursor_Value_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  datetime?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  reaction_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Club_Feed_Comments_Sum_Fields = {
  __typename?: 'club_feed_comments_sum_fields';
  /** A computed field, executes function "comment_child_count" */
  child_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "comment_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "club_feed_comments" */
export enum Club_Feed_Comments_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  Datetime = 'datetime',
  /** column name */
  Id = 'id',
  /** column name */
  ReactionId = 'reaction_id',
  /** column name */
  UserId = 'user_id'
}

export type Club_Feed_Comments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Club_Feed_Comments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Club_Feed_Comments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Club_Feed_Comments_Var_Pop_Fields = {
  __typename?: 'club_feed_comments_var_pop_fields';
  /** A computed field, executes function "comment_child_count" */
  child_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "comment_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_samp on columns */
export type Club_Feed_Comments_Var_Samp_Fields = {
  __typename?: 'club_feed_comments_var_samp_fields';
  /** A computed field, executes function "comment_child_count" */
  child_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "comment_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate variance on columns */
export type Club_Feed_Comments_Variance_Fields = {
  __typename?: 'club_feed_comments_variance_fields';
  /** A computed field, executes function "comment_child_count" */
  child_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "comment_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
};

/** unique or primary key constraints on table "club_feed" */
export enum Club_Feed_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClubFeedPkey = 'club_feed_pkey'
}

/** Die View ist für die files da, damit diese eine Relationship zu einem image id array haben können. Nur für interne Logik gedacht. */
export type Club_Feed_Image_Mapping = {
  __typename?: 'club_feed_image_mapping';
  /** An object relationship */
  feed?: Maybe<Club_Feed>;
  feed_id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "club_feed_image_mapping" */
export type Club_Feed_Image_Mapping_Aggregate = {
  __typename?: 'club_feed_image_mapping_aggregate';
  aggregate?: Maybe<Club_Feed_Image_Mapping_Aggregate_Fields>;
  nodes: Array<Club_Feed_Image_Mapping>;
};

/** aggregate fields of "club_feed_image_mapping" */
export type Club_Feed_Image_Mapping_Aggregate_Fields = {
  __typename?: 'club_feed_image_mapping_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Club_Feed_Image_Mapping_Max_Fields>;
  min?: Maybe<Club_Feed_Image_Mapping_Min_Fields>;
};


/** aggregate fields of "club_feed_image_mapping" */
export type Club_Feed_Image_Mapping_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Club_Feed_Image_Mapping_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "club_feed_image_mapping". All fields are combined with a logical 'AND'. */
export type Club_Feed_Image_Mapping_Bool_Exp = {
  _and?: InputMaybe<Array<Club_Feed_Image_Mapping_Bool_Exp>>;
  _not?: InputMaybe<Club_Feed_Image_Mapping_Bool_Exp>;
  _or?: InputMaybe<Array<Club_Feed_Image_Mapping_Bool_Exp>>;
  feed?: InputMaybe<Club_Feed_Bool_Exp>;
  feed_id?: InputMaybe<Uuid_Comparison_Exp>;
  image_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "club_feed_image_mapping" */
export type Club_Feed_Image_Mapping_Insert_Input = {
  feed?: InputMaybe<Club_Feed_Obj_Rel_Insert_Input>;
  feed_id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Club_Feed_Image_Mapping_Max_Fields = {
  __typename?: 'club_feed_image_mapping_max_fields';
  feed_id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Club_Feed_Image_Mapping_Min_Fields = {
  __typename?: 'club_feed_image_mapping_min_fields';
  feed_id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
};

/** input type for inserting object relation for remote table "club_feed_image_mapping" */
export type Club_Feed_Image_Mapping_Obj_Rel_Insert_Input = {
  data: Club_Feed_Image_Mapping_Insert_Input;
};

/** Ordering options when selecting data from "club_feed_image_mapping". */
export type Club_Feed_Image_Mapping_Order_By = {
  feed?: InputMaybe<Club_Feed_Order_By>;
  feed_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
};

/** select columns of table "club_feed_image_mapping" */
export enum Club_Feed_Image_Mapping_Select_Column {
  /** column name */
  FeedId = 'feed_id',
  /** column name */
  ImageId = 'image_id'
}

/** Streaming cursor of the table "club_feed_image_mapping" */
export type Club_Feed_Image_Mapping_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Club_Feed_Image_Mapping_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Club_Feed_Image_Mapping_Stream_Cursor_Value_Input = {
  feed_id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** input type for inserting data into table "club_feed" */
export type Club_Feed_Insert_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  club?: InputMaybe<Clubs_Obj_Rel_Insert_Input>;
  club_id?: InputMaybe<Scalars['uuid']['input']>;
  datetime?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_ids?: InputMaybe<Array<Scalars['uuid']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** columns and relationships of "club_feed_likes" */
export type Club_Feed_Likes = {
  __typename?: 'club_feed_likes';
  /** An object relationship */
  comment?: Maybe<Club_Feed_Comments>;
  /** An object relationship */
  feed?: Maybe<Club_Feed>;
  reaction_id: Scalars['uuid']['output'];
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "club_feed_likes" */
export type Club_Feed_Likes_Aggregate = {
  __typename?: 'club_feed_likes_aggregate';
  aggregate?: Maybe<Club_Feed_Likes_Aggregate_Fields>;
  nodes: Array<Club_Feed_Likes>;
};

/** aggregate fields of "club_feed_likes" */
export type Club_Feed_Likes_Aggregate_Fields = {
  __typename?: 'club_feed_likes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Club_Feed_Likes_Max_Fields>;
  min?: Maybe<Club_Feed_Likes_Min_Fields>;
};


/** aggregate fields of "club_feed_likes" */
export type Club_Feed_Likes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Club_Feed_Likes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "club_feed_likes". All fields are combined with a logical 'AND'. */
export type Club_Feed_Likes_Bool_Exp = {
  _and?: InputMaybe<Array<Club_Feed_Likes_Bool_Exp>>;
  _not?: InputMaybe<Club_Feed_Likes_Bool_Exp>;
  _or?: InputMaybe<Array<Club_Feed_Likes_Bool_Exp>>;
  comment?: InputMaybe<Club_Feed_Comments_Bool_Exp>;
  feed?: InputMaybe<Club_Feed_Bool_Exp>;
  reaction_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "club_feed_likes" */
export enum Club_Feed_Likes_Constraint {
  /** unique or primary key constraint on columns "user_id", "reaction_id" */
  ClubFeedLikesPkey = 'club_feed_likes_pkey'
}

/** input type for inserting data into table "club_feed_likes" */
export type Club_Feed_Likes_Insert_Input = {
  comment?: InputMaybe<Club_Feed_Comments_Obj_Rel_Insert_Input>;
  feed?: InputMaybe<Club_Feed_Obj_Rel_Insert_Input>;
  reaction_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Club_Feed_Likes_Max_Fields = {
  __typename?: 'club_feed_likes_max_fields';
  reaction_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Club_Feed_Likes_Min_Fields = {
  __typename?: 'club_feed_likes_min_fields';
  reaction_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "club_feed_likes" */
export type Club_Feed_Likes_Mutation_Response = {
  __typename?: 'club_feed_likes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Club_Feed_Likes>;
};

/** on_conflict condition type for table "club_feed_likes" */
export type Club_Feed_Likes_On_Conflict = {
  constraint: Club_Feed_Likes_Constraint;
  update_columns?: Array<Club_Feed_Likes_Update_Column>;
  where?: InputMaybe<Club_Feed_Likes_Bool_Exp>;
};

/** Ordering options when selecting data from "club_feed_likes". */
export type Club_Feed_Likes_Order_By = {
  comment?: InputMaybe<Club_Feed_Comments_Order_By>;
  feed?: InputMaybe<Club_Feed_Order_By>;
  reaction_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: club_feed_likes */
export type Club_Feed_Likes_Pk_Columns_Input = {
  reaction_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "club_feed_likes" */
export enum Club_Feed_Likes_Select_Column {
  /** column name */
  ReactionId = 'reaction_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "club_feed_likes" */
export type Club_Feed_Likes_Set_Input = {
  reaction_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "club_feed_likes" */
export type Club_Feed_Likes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Club_Feed_Likes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Club_Feed_Likes_Stream_Cursor_Value_Input = {
  reaction_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "club_feed_likes" */
export enum Club_Feed_Likes_Update_Column {
  /** column name */
  ReactionId = 'reaction_id',
  /** column name */
  UserId = 'user_id'
}

export type Club_Feed_Likes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Club_Feed_Likes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Club_Feed_Likes_Bool_Exp;
};

/** aggregate max on columns */
export type Club_Feed_Max_Fields = {
  __typename?: 'club_feed_max_fields';
  body?: Maybe<Scalars['String']['output']>;
  club_id?: Maybe<Scalars['uuid']['output']>;
  /** A computed field, executes function "club_feed_comment_count" */
  comment_count?: Maybe<Scalars['Int']['output']>;
  datetime?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_ids?: Maybe<Array<Scalars['uuid']['output']>>;
  /** A computed field, executes function "feed_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Club_Feed_Min_Fields = {
  __typename?: 'club_feed_min_fields';
  body?: Maybe<Scalars['String']['output']>;
  club_id?: Maybe<Scalars['uuid']['output']>;
  /** A computed field, executes function "club_feed_comment_count" */
  comment_count?: Maybe<Scalars['Int']['output']>;
  datetime?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_ids?: Maybe<Array<Scalars['uuid']['output']>>;
  /** A computed field, executes function "feed_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "club_feed" */
export type Club_Feed_Mutation_Response = {
  __typename?: 'club_feed_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Club_Feed>;
};

/** input type for inserting object relation for remote table "club_feed" */
export type Club_Feed_Obj_Rel_Insert_Input = {
  data: Club_Feed_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Club_Feed_On_Conflict>;
};

/** on_conflict condition type for table "club_feed" */
export type Club_Feed_On_Conflict = {
  constraint: Club_Feed_Constraint;
  update_columns?: Array<Club_Feed_Update_Column>;
  where?: InputMaybe<Club_Feed_Bool_Exp>;
};

/** Ordering options when selecting data from "club_feed". */
export type Club_Feed_Order_By = {
  body?: InputMaybe<Order_By>;
  club?: InputMaybe<Clubs_Order_By>;
  club_id?: InputMaybe<Order_By>;
  comment_count?: InputMaybe<Order_By>;
  datetime?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_ids?: InputMaybe<Order_By>;
  liked_by_user?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: club_feed */
export type Club_Feed_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "club_feed" */
export enum Club_Feed_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ClubId = 'club_id',
  /** column name */
  Datetime = 'datetime',
  /** column name */
  Id = 'id',
  /** column name */
  ImageIds = 'image_ids',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "club_feed" */
export type Club_Feed_Set_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  club_id?: InputMaybe<Scalars['uuid']['input']>;
  datetime?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_ids?: InputMaybe<Array<Scalars['uuid']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Club_Feed_Stddev_Fields = {
  __typename?: 'club_feed_stddev_fields';
  /** A computed field, executes function "club_feed_comment_count" */
  comment_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "feed_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate stddev_pop on columns */
export type Club_Feed_Stddev_Pop_Fields = {
  __typename?: 'club_feed_stddev_pop_fields';
  /** A computed field, executes function "club_feed_comment_count" */
  comment_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "feed_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate stddev_samp on columns */
export type Club_Feed_Stddev_Samp_Fields = {
  __typename?: 'club_feed_stddev_samp_fields';
  /** A computed field, executes function "club_feed_comment_count" */
  comment_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "feed_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
};

/** Streaming cursor of the table "club_feed" */
export type Club_Feed_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Club_Feed_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Club_Feed_Stream_Cursor_Value_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  club_id?: InputMaybe<Scalars['uuid']['input']>;
  datetime?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_ids?: InputMaybe<Array<Scalars['uuid']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Club_Feed_Sum_Fields = {
  __typename?: 'club_feed_sum_fields';
  /** A computed field, executes function "club_feed_comment_count" */
  comment_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "feed_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "club_feed" */
export enum Club_Feed_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ClubId = 'club_id',
  /** column name */
  Datetime = 'datetime',
  /** column name */
  Id = 'id',
  /** column name */
  ImageIds = 'image_ids',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

export type Club_Feed_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Club_Feed_Set_Input>;
  /** filter the rows which have to be updated */
  where: Club_Feed_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Club_Feed_Var_Pop_Fields = {
  __typename?: 'club_feed_var_pop_fields';
  /** A computed field, executes function "club_feed_comment_count" */
  comment_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "feed_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_samp on columns */
export type Club_Feed_Var_Samp_Fields = {
  __typename?: 'club_feed_var_samp_fields';
  /** A computed field, executes function "club_feed_comment_count" */
  comment_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "feed_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate variance on columns */
export type Club_Feed_Variance_Fields = {
  __typename?: 'club_feed_variance_fields';
  /** A computed field, executes function "club_feed_comment_count" */
  comment_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "feed_likes_count" */
  likes_count?: Maybe<Scalars['Int']['output']>;
};

/** Eigene View damit jeder User die Anzahl an Usern in einem Club sehen kann. Andernfalls ist es permission technisch schiwerig umzusetzen */
export type Club_User_Counts = {
  __typename?: 'club_user_counts';
  club_id?: Maybe<Scalars['uuid']['output']>;
  user_count?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "club_user_counts" */
export type Club_User_Counts_Aggregate = {
  __typename?: 'club_user_counts_aggregate';
  aggregate?: Maybe<Club_User_Counts_Aggregate_Fields>;
  nodes: Array<Club_User_Counts>;
};

/** aggregate fields of "club_user_counts" */
export type Club_User_Counts_Aggregate_Fields = {
  __typename?: 'club_user_counts_aggregate_fields';
  avg?: Maybe<Club_User_Counts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Club_User_Counts_Max_Fields>;
  min?: Maybe<Club_User_Counts_Min_Fields>;
  stddev?: Maybe<Club_User_Counts_Stddev_Fields>;
  stddev_pop?: Maybe<Club_User_Counts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Club_User_Counts_Stddev_Samp_Fields>;
  sum?: Maybe<Club_User_Counts_Sum_Fields>;
  var_pop?: Maybe<Club_User_Counts_Var_Pop_Fields>;
  var_samp?: Maybe<Club_User_Counts_Var_Samp_Fields>;
  variance?: Maybe<Club_User_Counts_Variance_Fields>;
};


/** aggregate fields of "club_user_counts" */
export type Club_User_Counts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Club_User_Counts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Club_User_Counts_Avg_Fields = {
  __typename?: 'club_user_counts_avg_fields';
  user_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "club_user_counts". All fields are combined with a logical 'AND'. */
export type Club_User_Counts_Bool_Exp = {
  _and?: InputMaybe<Array<Club_User_Counts_Bool_Exp>>;
  _not?: InputMaybe<Club_User_Counts_Bool_Exp>;
  _or?: InputMaybe<Array<Club_User_Counts_Bool_Exp>>;
  club_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_count?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for inserting data into table "club_user_counts" */
export type Club_User_Counts_Insert_Input = {
  club_id?: InputMaybe<Scalars['uuid']['input']>;
  user_count?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Club_User_Counts_Max_Fields = {
  __typename?: 'club_user_counts_max_fields';
  club_id?: Maybe<Scalars['uuid']['output']>;
  user_count?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Club_User_Counts_Min_Fields = {
  __typename?: 'club_user_counts_min_fields';
  club_id?: Maybe<Scalars['uuid']['output']>;
  user_count?: Maybe<Scalars['bigint']['output']>;
};

/** input type for inserting object relation for remote table "club_user_counts" */
export type Club_User_Counts_Obj_Rel_Insert_Input = {
  data: Club_User_Counts_Insert_Input;
};

/** Ordering options when selecting data from "club_user_counts". */
export type Club_User_Counts_Order_By = {
  club_id?: InputMaybe<Order_By>;
  user_count?: InputMaybe<Order_By>;
};

/** select columns of table "club_user_counts" */
export enum Club_User_Counts_Select_Column {
  /** column name */
  ClubId = 'club_id',
  /** column name */
  UserCount = 'user_count'
}

/** aggregate stddev on columns */
export type Club_User_Counts_Stddev_Fields = {
  __typename?: 'club_user_counts_stddev_fields';
  user_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Club_User_Counts_Stddev_Pop_Fields = {
  __typename?: 'club_user_counts_stddev_pop_fields';
  user_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Club_User_Counts_Stddev_Samp_Fields = {
  __typename?: 'club_user_counts_stddev_samp_fields';
  user_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "club_user_counts" */
export type Club_User_Counts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Club_User_Counts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Club_User_Counts_Stream_Cursor_Value_Input = {
  club_id?: InputMaybe<Scalars['uuid']['input']>;
  user_count?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Club_User_Counts_Sum_Fields = {
  __typename?: 'club_user_counts_sum_fields';
  user_count?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Club_User_Counts_Var_Pop_Fields = {
  __typename?: 'club_user_counts_var_pop_fields';
  user_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Club_User_Counts_Var_Samp_Fields = {
  __typename?: 'club_user_counts_var_samp_fields';
  user_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Club_User_Counts_Variance_Fields = {
  __typename?: 'club_user_counts_variance_fields';
  user_count?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "club_waters" */
export type Club_Waters = {
  __typename?: 'club_waters';
  /** An object relationship */
  club?: Maybe<Clubs>;
  club_id: Scalars['uuid']['output'];
  description?: Maybe<Scalars['String']['output']>;
  draft: Scalars['Boolean']['output'];
  fish_types: Array<Scalars['String']['output']>;
  geo_json: Scalars['jsonb']['output'];
  id: Scalars['uuid']['output'];
  image_id?: Maybe<Scalars['uuid']['output']>;
  members_only: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};


/** columns and relationships of "club_waters" */
export type Club_WatersGeo_JsonArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "club_waters" */
export type Club_Waters_Aggregate = {
  __typename?: 'club_waters_aggregate';
  aggregate?: Maybe<Club_Waters_Aggregate_Fields>;
  nodes: Array<Club_Waters>;
};

/** aggregate fields of "club_waters" */
export type Club_Waters_Aggregate_Fields = {
  __typename?: 'club_waters_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Club_Waters_Max_Fields>;
  min?: Maybe<Club_Waters_Min_Fields>;
};


/** aggregate fields of "club_waters" */
export type Club_Waters_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Club_Waters_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Club_Waters_Append_Input = {
  geo_json?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "club_waters". All fields are combined with a logical 'AND'. */
export type Club_Waters_Bool_Exp = {
  _and?: InputMaybe<Array<Club_Waters_Bool_Exp>>;
  _not?: InputMaybe<Club_Waters_Bool_Exp>;
  _or?: InputMaybe<Array<Club_Waters_Bool_Exp>>;
  club?: InputMaybe<Clubs_Bool_Exp>;
  club_id?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  draft?: InputMaybe<Boolean_Comparison_Exp>;
  fish_types?: InputMaybe<String_Array_Comparison_Exp>;
  geo_json?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_id?: InputMaybe<Uuid_Comparison_Exp>;
  members_only?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "club_waters" */
export enum Club_Waters_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClubWatersPkey = 'club_waters_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Club_Waters_Delete_At_Path_Input = {
  geo_json?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Club_Waters_Delete_Elem_Input = {
  geo_json?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Club_Waters_Delete_Key_Input = {
  geo_json?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "club_waters" */
export type Club_Waters_Insert_Input = {
  club?: InputMaybe<Clubs_Obj_Rel_Insert_Input>;
  club_id?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fish_types?: InputMaybe<Array<Scalars['String']['input']>>;
  geo_json?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  members_only?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Club_Waters_Max_Fields = {
  __typename?: 'club_waters_max_fields';
  club_id?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fish_types?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Club_Waters_Min_Fields = {
  __typename?: 'club_waters_min_fields';
  club_id?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fish_types?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "club_waters" */
export type Club_Waters_Mutation_Response = {
  __typename?: 'club_waters_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Club_Waters>;
};

/** input type for inserting object relation for remote table "club_waters" */
export type Club_Waters_Obj_Rel_Insert_Input = {
  data: Club_Waters_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Club_Waters_On_Conflict>;
};

/** on_conflict condition type for table "club_waters" */
export type Club_Waters_On_Conflict = {
  constraint: Club_Waters_Constraint;
  update_columns?: Array<Club_Waters_Update_Column>;
  where?: InputMaybe<Club_Waters_Bool_Exp>;
};

/** Ordering options when selecting data from "club_waters". */
export type Club_Waters_Order_By = {
  club?: InputMaybe<Clubs_Order_By>;
  club_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  draft?: InputMaybe<Order_By>;
  fish_types?: InputMaybe<Order_By>;
  geo_json?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  members_only?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: club_waters */
export type Club_Waters_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Club_Waters_Prepend_Input = {
  geo_json?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "club_waters" */
export enum Club_Waters_Select_Column {
  /** column name */
  ClubId = 'club_id',
  /** column name */
  Description = 'description',
  /** column name */
  Draft = 'draft',
  /** column name */
  FishTypes = 'fish_types',
  /** column name */
  GeoJson = 'geo_json',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  MembersOnly = 'members_only',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "club_waters" */
export type Club_Waters_Set_Input = {
  club_id?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fish_types?: InputMaybe<Array<Scalars['String']['input']>>;
  geo_json?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  members_only?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "club_waters" */
export type Club_Waters_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Club_Waters_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Club_Waters_Stream_Cursor_Value_Input = {
  club_id?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fish_types?: InputMaybe<Array<Scalars['String']['input']>>;
  geo_json?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  members_only?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "club_waters" */
export enum Club_Waters_Update_Column {
  /** column name */
  ClubId = 'club_id',
  /** column name */
  Description = 'description',
  /** column name */
  Draft = 'draft',
  /** column name */
  FishTypes = 'fish_types',
  /** column name */
  GeoJson = 'geo_json',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  MembersOnly = 'members_only',
  /** column name */
  Name = 'name'
}

export type Club_Waters_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Club_Waters_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Club_Waters_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Club_Waters_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Club_Waters_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Club_Waters_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Club_Waters_Set_Input>;
  /** filter the rows which have to be updated */
  where: Club_Waters_Bool_Exp;
};

/** columns and relationships of "clubs" */
export type Clubs = {
  __typename?: 'clubs';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  club_documents: Array<Club_Documents>;
  /** An aggregate relationship */
  club_documents_aggregate: Club_Documents_Aggregate;
  /** An object relationship */
  club_user_count_view?: Maybe<Club_User_Counts>;
  contact_name?: Maybe<Scalars['String']['output']>;
  contact_phone_number?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  location?: Maybe<Scalars['geography']['output']>;
  max_users: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phone_number?: Maybe<Scalars['String']['output']>;
  secret: Scalars['String']['output'];
  /** An array relationship */
  user_club_relations: Array<User_Club_Relation>;
  /** An aggregate relationship */
  user_club_relations_aggregate: User_Club_Relation_Aggregate;
  version: Scalars['bigint']['output'];
  website?: Maybe<Scalars['String']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "clubs" */
export type ClubsClub_DocumentsArgs = {
  distinct_on?: InputMaybe<Array<Club_Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Documents_Order_By>>;
  where?: InputMaybe<Club_Documents_Bool_Exp>;
};


/** columns and relationships of "clubs" */
export type ClubsClub_Documents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Documents_Order_By>>;
  where?: InputMaybe<Club_Documents_Bool_Exp>;
};


/** columns and relationships of "clubs" */
export type ClubsUser_Club_RelationsArgs = {
  distinct_on?: InputMaybe<Array<User_Club_Relation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Club_Relation_Order_By>>;
  where?: InputMaybe<User_Club_Relation_Bool_Exp>;
};


/** columns and relationships of "clubs" */
export type ClubsUser_Club_Relations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Club_Relation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Club_Relation_Order_By>>;
  where?: InputMaybe<User_Club_Relation_Bool_Exp>;
};

/** aggregated selection of "clubs" */
export type Clubs_Aggregate = {
  __typename?: 'clubs_aggregate';
  aggregate?: Maybe<Clubs_Aggregate_Fields>;
  nodes: Array<Clubs>;
};

/** aggregate fields of "clubs" */
export type Clubs_Aggregate_Fields = {
  __typename?: 'clubs_aggregate_fields';
  avg?: Maybe<Clubs_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Clubs_Max_Fields>;
  min?: Maybe<Clubs_Min_Fields>;
  stddev?: Maybe<Clubs_Stddev_Fields>;
  stddev_pop?: Maybe<Clubs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Clubs_Stddev_Samp_Fields>;
  sum?: Maybe<Clubs_Sum_Fields>;
  var_pop?: Maybe<Clubs_Var_Pop_Fields>;
  var_samp?: Maybe<Clubs_Var_Samp_Fields>;
  variance?: Maybe<Clubs_Variance_Fields>;
};


/** aggregate fields of "clubs" */
export type Clubs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Clubs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Clubs_Avg_Fields = {
  __typename?: 'clubs_avg_fields';
  max_users?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "clubs". All fields are combined with a logical 'AND'. */
export type Clubs_Bool_Exp = {
  _and?: InputMaybe<Array<Clubs_Bool_Exp>>;
  _not?: InputMaybe<Clubs_Bool_Exp>;
  _or?: InputMaybe<Array<Clubs_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  club_documents?: InputMaybe<Club_Documents_Bool_Exp>;
  club_documents_aggregate?: InputMaybe<Club_Documents_Aggregate_Bool_Exp>;
  club_user_count_view?: InputMaybe<Club_User_Counts_Bool_Exp>;
  contact_name?: InputMaybe<String_Comparison_Exp>;
  contact_phone_number?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location?: InputMaybe<Geography_Comparison_Exp>;
  max_users?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  secret?: InputMaybe<String_Comparison_Exp>;
  user_club_relations?: InputMaybe<User_Club_Relation_Bool_Exp>;
  user_club_relations_aggregate?: InputMaybe<User_Club_Relation_Aggregate_Bool_Exp>;
  version?: InputMaybe<Bigint_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
  zip_code?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "clubs" */
export enum Clubs_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClubsPkey = 'clubs_pkey'
}

/** input type for incrementing numeric columns in table "clubs" */
export type Clubs_Inc_Input = {
  max_users?: InputMaybe<Scalars['Int']['input']>;
  version?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "clubs" */
export type Clubs_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  club_documents?: InputMaybe<Club_Documents_Arr_Rel_Insert_Input>;
  club_user_count_view?: InputMaybe<Club_User_Counts_Obj_Rel_Insert_Input>;
  contact_name?: InputMaybe<Scalars['String']['input']>;
  contact_phone_number?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['geography']['input']>;
  max_users?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  user_club_relations?: InputMaybe<User_Club_Relation_Arr_Rel_Insert_Input>;
  version?: InputMaybe<Scalars['bigint']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Clubs_Max_Fields = {
  __typename?: 'clubs_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contact_name?: Maybe<Scalars['String']['output']>;
  contact_phone_number?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  max_users?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['bigint']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Clubs_Min_Fields = {
  __typename?: 'clubs_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contact_name?: Maybe<Scalars['String']['output']>;
  contact_phone_number?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  max_users?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['bigint']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "clubs" */
export type Clubs_Mutation_Response = {
  __typename?: 'clubs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Clubs>;
};

export type Clubs_Nearby_Args = {
  lat?: InputMaybe<Scalars['float8']['input']>;
  lon?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting object relation for remote table "clubs" */
export type Clubs_Obj_Rel_Insert_Input = {
  data: Clubs_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Clubs_On_Conflict>;
};

/** on_conflict condition type for table "clubs" */
export type Clubs_On_Conflict = {
  constraint: Clubs_Constraint;
  update_columns?: Array<Clubs_Update_Column>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};

/** Ordering options when selecting data from "clubs". */
export type Clubs_Order_By = {
  address?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  club_documents_aggregate?: InputMaybe<Club_Documents_Aggregate_Order_By>;
  club_user_count_view?: InputMaybe<Club_User_Counts_Order_By>;
  contact_name?: InputMaybe<Order_By>;
  contact_phone_number?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  max_users?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  secret?: InputMaybe<Order_By>;
  user_club_relations_aggregate?: InputMaybe<User_Club_Relation_Aggregate_Order_By>;
  version?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
  zip_code?: InputMaybe<Order_By>;
};

/** primary key columns input for table: clubs */
export type Clubs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "clubs" */
export enum Clubs_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  ContactName = 'contact_name',
  /** column name */
  ContactPhoneNumber = 'contact_phone_number',
  /** column name */
  Country = 'country',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  MaxUsers = 'max_users',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Secret = 'secret',
  /** column name */
  Version = 'version',
  /** column name */
  Website = 'website',
  /** column name */
  ZipCode = 'zip_code'
}

/** input type for updating data in table "clubs" */
export type Clubs_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contact_name?: InputMaybe<Scalars['String']['input']>;
  contact_phone_number?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['geography']['input']>;
  max_users?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['bigint']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Clubs_Stddev_Fields = {
  __typename?: 'clubs_stddev_fields';
  max_users?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Clubs_Stddev_Pop_Fields = {
  __typename?: 'clubs_stddev_pop_fields';
  max_users?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Clubs_Stddev_Samp_Fields = {
  __typename?: 'clubs_stddev_samp_fields';
  max_users?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "clubs" */
export type Clubs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Clubs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Clubs_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contact_name?: InputMaybe<Scalars['String']['input']>;
  contact_phone_number?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['geography']['input']>;
  max_users?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['bigint']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Clubs_Sum_Fields = {
  __typename?: 'clubs_sum_fields';
  max_users?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "clubs" */
export enum Clubs_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  ContactName = 'contact_name',
  /** column name */
  ContactPhoneNumber = 'contact_phone_number',
  /** column name */
  Country = 'country',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  MaxUsers = 'max_users',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Secret = 'secret',
  /** column name */
  Version = 'version',
  /** column name */
  Website = 'website',
  /** column name */
  ZipCode = 'zip_code'
}

export type Clubs_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Clubs_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Clubs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Clubs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Clubs_Var_Pop_Fields = {
  __typename?: 'clubs_var_pop_fields';
  max_users?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Clubs_Var_Samp_Fields = {
  __typename?: 'clubs_var_samp_fields';
  max_users?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Clubs_Variance_Fields = {
  __typename?: 'clubs_variance_fields';
  max_users?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "documents" */
export type Documents = {
  __typename?: 'documents';
  document_status: _Enumtable_Document_Status_Enum;
  document_type: _Enumtable_Document_Type_Enum;
  /** An object relationship */
  file: Files;
  file_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  rejected_reason?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
  version: Scalars['bigint']['output'];
};

/** aggregated selection of "documents" */
export type Documents_Aggregate = {
  __typename?: 'documents_aggregate';
  aggregate?: Maybe<Documents_Aggregate_Fields>;
  nodes: Array<Documents>;
};

export type Documents_Aggregate_Bool_Exp = {
  count?: InputMaybe<Documents_Aggregate_Bool_Exp_Count>;
};

export type Documents_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Documents_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Documents_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "documents" */
export type Documents_Aggregate_Fields = {
  __typename?: 'documents_aggregate_fields';
  avg?: Maybe<Documents_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Documents_Max_Fields>;
  min?: Maybe<Documents_Min_Fields>;
  stddev?: Maybe<Documents_Stddev_Fields>;
  stddev_pop?: Maybe<Documents_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Documents_Stddev_Samp_Fields>;
  sum?: Maybe<Documents_Sum_Fields>;
  var_pop?: Maybe<Documents_Var_Pop_Fields>;
  var_samp?: Maybe<Documents_Var_Samp_Fields>;
  variance?: Maybe<Documents_Variance_Fields>;
};


/** aggregate fields of "documents" */
export type Documents_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Documents_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "documents" */
export type Documents_Aggregate_Order_By = {
  avg?: InputMaybe<Documents_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Documents_Max_Order_By>;
  min?: InputMaybe<Documents_Min_Order_By>;
  stddev?: InputMaybe<Documents_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Documents_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Documents_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Documents_Sum_Order_By>;
  var_pop?: InputMaybe<Documents_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Documents_Var_Samp_Order_By>;
  variance?: InputMaybe<Documents_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "documents" */
export type Documents_Arr_Rel_Insert_Input = {
  data: Array<Documents_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Documents_On_Conflict>;
};

/** aggregate avg on columns */
export type Documents_Avg_Fields = {
  __typename?: 'documents_avg_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "documents" */
export type Documents_Avg_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "documents". All fields are combined with a logical 'AND'. */
export type Documents_Bool_Exp = {
  _and?: InputMaybe<Array<Documents_Bool_Exp>>;
  _not?: InputMaybe<Documents_Bool_Exp>;
  _or?: InputMaybe<Array<Documents_Bool_Exp>>;
  document_status?: InputMaybe<_Enumtable_Document_Status_Enum_Comparison_Exp>;
  document_type?: InputMaybe<_Enumtable_Document_Type_Enum_Comparison_Exp>;
  file?: InputMaybe<Files_Bool_Exp>;
  file_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  rejected_reason?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  version?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "documents" */
export enum Documents_Constraint {
  /** unique or primary key constraint on columns "file_id" */
  DocumentsFileIdKey = 'documents_file_id_key',
  /** unique or primary key constraint on columns "id" */
  DocumentsPkey = 'documents_pkey'
}

/** input type for incrementing numeric columns in table "documents" */
export type Documents_Inc_Input = {
  version?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "documents" */
export type Documents_Insert_Input = {
  document_status?: InputMaybe<_Enumtable_Document_Status_Enum>;
  document_type?: InputMaybe<_Enumtable_Document_Type_Enum>;
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  file_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rejected_reason?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  version?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Documents_Max_Fields = {
  __typename?: 'documents_max_fields';
  file_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  rejected_reason?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  version?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "documents" */
export type Documents_Max_Order_By = {
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rejected_reason?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Documents_Min_Fields = {
  __typename?: 'documents_min_fields';
  file_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  rejected_reason?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  version?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "documents" */
export type Documents_Min_Order_By = {
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rejected_reason?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "documents" */
export type Documents_Mutation_Response = {
  __typename?: 'documents_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Documents>;
};

/** input type for inserting object relation for remote table "documents" */
export type Documents_Obj_Rel_Insert_Input = {
  data: Documents_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Documents_On_Conflict>;
};

/** on_conflict condition type for table "documents" */
export type Documents_On_Conflict = {
  constraint: Documents_Constraint;
  update_columns?: Array<Documents_Update_Column>;
  where?: InputMaybe<Documents_Bool_Exp>;
};

/** Ordering options when selecting data from "documents". */
export type Documents_Order_By = {
  document_status?: InputMaybe<Order_By>;
  document_type?: InputMaybe<Order_By>;
  file?: InputMaybe<Files_Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rejected_reason?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: documents */
export type Documents_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "documents" */
export enum Documents_Select_Column {
  /** column name */
  DocumentStatus = 'document_status',
  /** column name */
  DocumentType = 'document_type',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  RejectedReason = 'rejected_reason',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Version = 'version'
}

/** input type for updating data in table "documents" */
export type Documents_Set_Input = {
  document_status?: InputMaybe<_Enumtable_Document_Status_Enum>;
  document_type?: InputMaybe<_Enumtable_Document_Type_Enum>;
  file_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rejected_reason?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  version?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Documents_Stddev_Fields = {
  __typename?: 'documents_stddev_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "documents" */
export type Documents_Stddev_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Documents_Stddev_Pop_Fields = {
  __typename?: 'documents_stddev_pop_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "documents" */
export type Documents_Stddev_Pop_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Documents_Stddev_Samp_Fields = {
  __typename?: 'documents_stddev_samp_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "documents" */
export type Documents_Stddev_Samp_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "documents" */
export type Documents_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Documents_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Documents_Stream_Cursor_Value_Input = {
  document_status?: InputMaybe<_Enumtable_Document_Status_Enum>;
  document_type?: InputMaybe<_Enumtable_Document_Type_Enum>;
  file_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rejected_reason?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  version?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Documents_Sum_Fields = {
  __typename?: 'documents_sum_fields';
  version?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "documents" */
export type Documents_Sum_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** update columns of table "documents" */
export enum Documents_Update_Column {
  /** column name */
  DocumentStatus = 'document_status',
  /** column name */
  DocumentType = 'document_type',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  RejectedReason = 'rejected_reason',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Version = 'version'
}

export type Documents_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Documents_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Documents_Set_Input>;
  /** filter the rows which have to be updated */
  where: Documents_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Documents_Var_Pop_Fields = {
  __typename?: 'documents_var_pop_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "documents" */
export type Documents_Var_Pop_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Documents_Var_Samp_Fields = {
  __typename?: 'documents_var_samp_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "documents" */
export type Documents_Var_Samp_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Documents_Variance_Fields = {
  __typename?: 'documents_variance_fields';
  version?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "documents" */
export type Documents_Variance_Order_By = {
  version?: InputMaybe<Order_By>;
};

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String']['output'];
  /** An object relationship */
  club_document?: Maybe<Club_Documents>;
  /** An object relationship */
  club_water?: Maybe<Club_Waters>;
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  documents?: Maybe<Documents>;
  etag?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  feed_image?: Maybe<Club_Feed_Image_Mapping>;
  id: Scalars['uuid']['output'];
  isUploaded?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<Scalars['jsonb']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "storage.files" */
export type FilesMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

export type Files_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Files_Aggregate_Bool_Exp_Count>;
};

export type Files_Aggregate_Bool_Exp_Bool_And = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Files_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  club_document?: InputMaybe<Club_Documents_Bool_Exp>;
  club_water?: InputMaybe<Club_Waters_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  documents?: InputMaybe<Documents_Bool_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  feed_image?: InputMaybe<Club_Feed_Image_Mapping_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Files_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Files_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Files_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']['input']>;
  club_document?: InputMaybe<Club_Documents_Obj_Rel_Insert_Input>;
  club_water?: InputMaybe<Club_Waters_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  documents?: InputMaybe<Documents_Obj_Rel_Insert_Input>;
  etag?: InputMaybe<Scalars['String']['input']>;
  feed_image?: InputMaybe<Club_Feed_Image_Mapping_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  etag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  etag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** input type for inserting object relation for remote table "storage.files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  club_document?: InputMaybe<Club_Documents_Order_By>;
  club_water?: InputMaybe<Club_Waters_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  documents?: InputMaybe<Documents_Order_By>;
  etag?: InputMaybe<Order_By>;
  feed_image?: InputMaybe<Club_Feed_Image_Mapping_Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Files_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

export type Files_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Files_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Files_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Files_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Files_Set_Input>;
  /** filter the rows which have to be updated */
  where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** columns and relationships of "fishing_days" */
export type Fishing_Days = {
  __typename?: 'fishing_days';
  /** An array relationship */
  catches: Array<Catches>;
  /** An aggregate relationship */
  catches_aggregate: Catches_Aggregate;
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  start_date: Scalars['timestamptz']['output'];
  user_id: Scalars['uuid']['output'];
  /** An object relationship */
  water?: Maybe<Club_Waters>;
  water_id: Scalars['uuid']['output'];
};


/** columns and relationships of "fishing_days" */
export type Fishing_DaysCatchesArgs = {
  distinct_on?: InputMaybe<Array<Catches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Catches_Order_By>>;
  where?: InputMaybe<Catches_Bool_Exp>;
};


/** columns and relationships of "fishing_days" */
export type Fishing_DaysCatches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Catches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Catches_Order_By>>;
  where?: InputMaybe<Catches_Bool_Exp>;
};

/** aggregated selection of "fishing_days" */
export type Fishing_Days_Aggregate = {
  __typename?: 'fishing_days_aggregate';
  aggregate?: Maybe<Fishing_Days_Aggregate_Fields>;
  nodes: Array<Fishing_Days>;
};

/** aggregate fields of "fishing_days" */
export type Fishing_Days_Aggregate_Fields = {
  __typename?: 'fishing_days_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Fishing_Days_Max_Fields>;
  min?: Maybe<Fishing_Days_Min_Fields>;
};


/** aggregate fields of "fishing_days" */
export type Fishing_Days_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fishing_Days_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "fishing_days". All fields are combined with a logical 'AND'. */
export type Fishing_Days_Bool_Exp = {
  _and?: InputMaybe<Array<Fishing_Days_Bool_Exp>>;
  _not?: InputMaybe<Fishing_Days_Bool_Exp>;
  _or?: InputMaybe<Array<Fishing_Days_Bool_Exp>>;
  catches?: InputMaybe<Catches_Bool_Exp>;
  catches_aggregate?: InputMaybe<Catches_Aggregate_Bool_Exp>;
  end_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  start_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  water?: InputMaybe<Club_Waters_Bool_Exp>;
  water_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "fishing_days" */
export enum Fishing_Days_Constraint {
  /** unique or primary key constraint on columns "id" */
  FishingDaysPkey = 'fishing_days_pkey'
}

/** input type for inserting data into table "fishing_days" */
export type Fishing_Days_Insert_Input = {
  catches?: InputMaybe<Catches_Arr_Rel_Insert_Input>;
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  start_date?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  water?: InputMaybe<Club_Waters_Obj_Rel_Insert_Input>;
  water_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Fishing_Days_Max_Fields = {
  __typename?: 'fishing_days_max_fields';
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  start_date?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  water_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Fishing_Days_Min_Fields = {
  __typename?: 'fishing_days_min_fields';
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  start_date?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  water_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "fishing_days" */
export type Fishing_Days_Mutation_Response = {
  __typename?: 'fishing_days_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Fishing_Days>;
};

/** input type for inserting object relation for remote table "fishing_days" */
export type Fishing_Days_Obj_Rel_Insert_Input = {
  data: Fishing_Days_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Fishing_Days_On_Conflict>;
};

/** on_conflict condition type for table "fishing_days" */
export type Fishing_Days_On_Conflict = {
  constraint: Fishing_Days_Constraint;
  update_columns?: Array<Fishing_Days_Update_Column>;
  where?: InputMaybe<Fishing_Days_Bool_Exp>;
};

/** Ordering options when selecting data from "fishing_days". */
export type Fishing_Days_Order_By = {
  catches_aggregate?: InputMaybe<Catches_Aggregate_Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  water?: InputMaybe<Club_Waters_Order_By>;
  water_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fishing_days */
export type Fishing_Days_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "fishing_days" */
export enum Fishing_Days_Select_Column {
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WaterId = 'water_id'
}

/** input type for updating data in table "fishing_days" */
export type Fishing_Days_Set_Input = {
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  start_date?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  water_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "fishing_days" */
export type Fishing_Days_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fishing_Days_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fishing_Days_Stream_Cursor_Value_Input = {
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  start_date?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  water_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "fishing_days" */
export enum Fishing_Days_Update_Column {
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WaterId = 'water_id'
}

export type Fishing_Days_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Fishing_Days_Set_Input>;
  /** filter the rows which have to be updated */
  where: Fishing_Days_Bool_Exp;
};

export type Geography_Cast_Exp = {
  geometry?: InputMaybe<Geometry_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geography". All fields are combined with logical 'AND'. */
export type Geography_Comparison_Exp = {
  _cast?: InputMaybe<Geography_Cast_Exp>;
  _eq?: InputMaybe<Scalars['geography']['input']>;
  _gt?: InputMaybe<Scalars['geography']['input']>;
  _gte?: InputMaybe<Scalars['geography']['input']>;
  _in?: InputMaybe<Array<Scalars['geography']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['geography']['input']>;
  _lte?: InputMaybe<Scalars['geography']['input']>;
  _neq?: InputMaybe<Scalars['geography']['input']>;
  _nin?: InputMaybe<Array<Scalars['geography']['input']>>;
  /** is the column within a given distance from the given geography value */
  _st_d_within?: InputMaybe<St_D_Within_Geography_Input>;
  /** does the column spatially intersect the given geography value */
  _st_intersects?: InputMaybe<Scalars['geography']['input']>;
};

export type Geometry_Cast_Exp = {
  geography?: InputMaybe<Geography_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geometry". All fields are combined with logical 'AND'. */
export type Geometry_Comparison_Exp = {
  _cast?: InputMaybe<Geometry_Cast_Exp>;
  _eq?: InputMaybe<Scalars['geometry']['input']>;
  _gt?: InputMaybe<Scalars['geometry']['input']>;
  _gte?: InputMaybe<Scalars['geometry']['input']>;
  _in?: InputMaybe<Array<Scalars['geometry']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['geometry']['input']>;
  _lte?: InputMaybe<Scalars['geometry']['input']>;
  _neq?: InputMaybe<Scalars['geometry']['input']>;
  _nin?: InputMaybe<Array<Scalars['geometry']['input']>>;
  /** is the column within a given 3D distance from the given geometry value */
  _st_3d_d_within?: InputMaybe<St_D_Within_Input>;
  /** does the column spatially intersect the given geometry value in 3D */
  _st_3d_intersects?: InputMaybe<Scalars['geometry']['input']>;
  /** does the column contain the given geometry value */
  _st_contains?: InputMaybe<Scalars['geometry']['input']>;
  /** does the column cross the given geometry value */
  _st_crosses?: InputMaybe<Scalars['geometry']['input']>;
  /** is the column within a given distance from the given geometry value */
  _st_d_within?: InputMaybe<St_D_Within_Input>;
  /** is the column equal to given geometry value (directionality is ignored) */
  _st_equals?: InputMaybe<Scalars['geometry']['input']>;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: InputMaybe<Scalars['geometry']['input']>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: InputMaybe<Scalars['geometry']['input']>;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: InputMaybe<Scalars['geometry']['input']>;
  /** is the column contained in the given geometry value */
  _st_within?: InputMaybe<Scalars['geometry']['input']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete single row from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** delete data from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "storage.virus" */
  deleteVirus?: Maybe<Virus>;
  /** delete data from the table: "storage.virus" */
  deleteViruses?: Maybe<Virus_Mutation_Response>;
  /** delete data from the table: "_enumtable.document_status" */
  delete__enumtable_document_status?: Maybe<_Enumtable_Document_Status_Mutation_Response>;
  /** delete single row from the table: "_enumtable.document_status" */
  delete__enumtable_document_status_by_pk?: Maybe<_Enumtable_Document_Status>;
  /** delete data from the table: "_enumtable.document_type" */
  delete__enumtable_document_type?: Maybe<_Enumtable_Document_Type_Mutation_Response>;
  /** delete single row from the table: "_enumtable.document_type" */
  delete__enumtable_document_type_by_pk?: Maybe<_Enumtable_Document_Type>;
  /** delete data from the table: "_enumtable.fish_type" */
  delete__enumtable_fish_type?: Maybe<_Enumtable_Fish_Type_Mutation_Response>;
  /** delete single row from the table: "_enumtable.fish_type" */
  delete__enumtable_fish_type_by_pk?: Maybe<_Enumtable_Fish_Type>;
  /** delete data from the table: "_enumtable.report_reason" */
  delete__enumtable_report_reason?: Maybe<_Enumtable_Report_Reason_Mutation_Response>;
  /** delete single row from the table: "_enumtable.report_reason" */
  delete__enumtable_report_reason_by_pk?: Maybe<_Enumtable_Report_Reason>;
  /** delete data from the table: "_enumtable.user_club_role" */
  delete__enumtable_user_club_role?: Maybe<_Enumtable_User_Club_Role_Mutation_Response>;
  /** delete single row from the table: "_enumtable.user_club_role" */
  delete__enumtable_user_club_role_by_pk?: Maybe<_Enumtable_User_Club_Role>;
  /** delete data from the table: "catches" */
  delete_catches?: Maybe<Catches_Mutation_Response>;
  /** delete single row from the table: "catches" */
  delete_catches_by_pk?: Maybe<Catches>;
  /** delete data from the table: "club_documents" */
  delete_club_documents?: Maybe<Club_Documents_Mutation_Response>;
  /** delete single row from the table: "club_documents" */
  delete_club_documents_by_pk?: Maybe<Club_Documents>;
  /** delete data from the table: "club_feed" */
  delete_club_feed?: Maybe<Club_Feed_Mutation_Response>;
  /** delete single row from the table: "club_feed" */
  delete_club_feed_by_pk?: Maybe<Club_Feed>;
  /** delete data from the table: "club_feed_comments" */
  delete_club_feed_comments?: Maybe<Club_Feed_Comments_Mutation_Response>;
  /** delete single row from the table: "club_feed_comments" */
  delete_club_feed_comments_by_pk?: Maybe<Club_Feed_Comments>;
  /** delete data from the table: "club_feed_likes" */
  delete_club_feed_likes?: Maybe<Club_Feed_Likes_Mutation_Response>;
  /** delete single row from the table: "club_feed_likes" */
  delete_club_feed_likes_by_pk?: Maybe<Club_Feed_Likes>;
  /** delete data from the table: "club_waters" */
  delete_club_waters?: Maybe<Club_Waters_Mutation_Response>;
  /** delete single row from the table: "club_waters" */
  delete_club_waters_by_pk?: Maybe<Club_Waters>;
  /** delete data from the table: "clubs" */
  delete_clubs?: Maybe<Clubs_Mutation_Response>;
  /** delete single row from the table: "clubs" */
  delete_clubs_by_pk?: Maybe<Clubs>;
  /** delete data from the table: "documents" */
  delete_documents?: Maybe<Documents_Mutation_Response>;
  /** delete single row from the table: "documents" */
  delete_documents_by_pk?: Maybe<Documents>;
  /** delete data from the table: "fishing_days" */
  delete_fishing_days?: Maybe<Fishing_Days_Mutation_Response>;
  /** delete single row from the table: "fishing_days" */
  delete_fishing_days_by_pk?: Maybe<Fishing_Days>;
  /** delete data from the table: "reports" */
  delete_reports?: Maybe<Reports_Mutation_Response>;
  /** delete single row from the table: "reports" */
  delete_reports_by_pk?: Maybe<Reports>;
  /** delete data from the table: "user_club_relation" */
  delete_user_club_relation?: Maybe<User_Club_Relation_Mutation_Response>;
  /** delete single row from the table: "user_club_relation" */
  delete_user_club_relation_by_pk?: Maybe<User_Club_Relation>;
  /** delete data from the table: "user_created_at" */
  delete_user_created_at?: Maybe<User_Created_At_Mutation_Response>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert a single row into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** insert data into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "storage.virus" */
  insertVirus?: Maybe<Virus>;
  /** insert data into the table: "storage.virus" */
  insertViruses?: Maybe<Virus_Mutation_Response>;
  /** insert data into the table: "_enumtable.document_status" */
  insert__enumtable_document_status?: Maybe<_Enumtable_Document_Status_Mutation_Response>;
  /** insert a single row into the table: "_enumtable.document_status" */
  insert__enumtable_document_status_one?: Maybe<_Enumtable_Document_Status>;
  /** insert data into the table: "_enumtable.document_type" */
  insert__enumtable_document_type?: Maybe<_Enumtable_Document_Type_Mutation_Response>;
  /** insert a single row into the table: "_enumtable.document_type" */
  insert__enumtable_document_type_one?: Maybe<_Enumtable_Document_Type>;
  /** insert data into the table: "_enumtable.fish_type" */
  insert__enumtable_fish_type?: Maybe<_Enumtable_Fish_Type_Mutation_Response>;
  /** insert a single row into the table: "_enumtable.fish_type" */
  insert__enumtable_fish_type_one?: Maybe<_Enumtable_Fish_Type>;
  /** insert data into the table: "_enumtable.report_reason" */
  insert__enumtable_report_reason?: Maybe<_Enumtable_Report_Reason_Mutation_Response>;
  /** insert a single row into the table: "_enumtable.report_reason" */
  insert__enumtable_report_reason_one?: Maybe<_Enumtable_Report_Reason>;
  /** insert data into the table: "_enumtable.user_club_role" */
  insert__enumtable_user_club_role?: Maybe<_Enumtable_User_Club_Role_Mutation_Response>;
  /** insert a single row into the table: "_enumtable.user_club_role" */
  insert__enumtable_user_club_role_one?: Maybe<_Enumtable_User_Club_Role>;
  /** insert data into the table: "catches" */
  insert_catches?: Maybe<Catches_Mutation_Response>;
  /** insert a single row into the table: "catches" */
  insert_catches_one?: Maybe<Catches>;
  /** insert data into the table: "club_documents" */
  insert_club_documents?: Maybe<Club_Documents_Mutation_Response>;
  /** insert a single row into the table: "club_documents" */
  insert_club_documents_one?: Maybe<Club_Documents>;
  /** insert data into the table: "club_feed" */
  insert_club_feed?: Maybe<Club_Feed_Mutation_Response>;
  /** insert data into the table: "club_feed_comments" */
  insert_club_feed_comments?: Maybe<Club_Feed_Comments_Mutation_Response>;
  /** insert a single row into the table: "club_feed_comments" */
  insert_club_feed_comments_one?: Maybe<Club_Feed_Comments>;
  /** insert data into the table: "club_feed_likes" */
  insert_club_feed_likes?: Maybe<Club_Feed_Likes_Mutation_Response>;
  /** insert a single row into the table: "club_feed_likes" */
  insert_club_feed_likes_one?: Maybe<Club_Feed_Likes>;
  /** insert a single row into the table: "club_feed" */
  insert_club_feed_one?: Maybe<Club_Feed>;
  /** insert data into the table: "club_waters" */
  insert_club_waters?: Maybe<Club_Waters_Mutation_Response>;
  /** insert a single row into the table: "club_waters" */
  insert_club_waters_one?: Maybe<Club_Waters>;
  /** insert data into the table: "clubs" */
  insert_clubs?: Maybe<Clubs_Mutation_Response>;
  /** insert a single row into the table: "clubs" */
  insert_clubs_one?: Maybe<Clubs>;
  /** insert data into the table: "documents" */
  insert_documents?: Maybe<Documents_Mutation_Response>;
  /** insert a single row into the table: "documents" */
  insert_documents_one?: Maybe<Documents>;
  /** insert data into the table: "fishing_days" */
  insert_fishing_days?: Maybe<Fishing_Days_Mutation_Response>;
  /** insert a single row into the table: "fishing_days" */
  insert_fishing_days_one?: Maybe<Fishing_Days>;
  /** insert data into the table: "reports" */
  insert_reports?: Maybe<Reports_Mutation_Response>;
  /** insert a single row into the table: "reports" */
  insert_reports_one?: Maybe<Reports>;
  /** insert data into the table: "user_club_relation" */
  insert_user_club_relation?: Maybe<User_Club_Relation_Mutation_Response>;
  /** insert a single row into the table: "user_club_relation" */
  insert_user_club_relation_one?: Maybe<User_Club_Relation>;
  /** insert data into the table: "user_created_at" */
  insert_user_created_at?: Maybe<User_Created_At_Mutation_Response>;
  /** insert a single row into the table: "user_created_at" */
  insert_user_created_at_one?: Maybe<User_Created_At>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update single row of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** update data of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "storage.virus" */
  updateVirus?: Maybe<Virus>;
  /** update data of the table: "storage.virus" */
  updateViruses?: Maybe<Virus_Mutation_Response>;
  /** update data of the table: "_enumtable.document_status" */
  update__enumtable_document_status?: Maybe<_Enumtable_Document_Status_Mutation_Response>;
  /** update single row of the table: "_enumtable.document_status" */
  update__enumtable_document_status_by_pk?: Maybe<_Enumtable_Document_Status>;
  /** update multiples rows of table: "_enumtable.document_status" */
  update__enumtable_document_status_many?: Maybe<Array<Maybe<_Enumtable_Document_Status_Mutation_Response>>>;
  /** update data of the table: "_enumtable.document_type" */
  update__enumtable_document_type?: Maybe<_Enumtable_Document_Type_Mutation_Response>;
  /** update single row of the table: "_enumtable.document_type" */
  update__enumtable_document_type_by_pk?: Maybe<_Enumtable_Document_Type>;
  /** update multiples rows of table: "_enumtable.document_type" */
  update__enumtable_document_type_many?: Maybe<Array<Maybe<_Enumtable_Document_Type_Mutation_Response>>>;
  /** update data of the table: "_enumtable.fish_type" */
  update__enumtable_fish_type?: Maybe<_Enumtable_Fish_Type_Mutation_Response>;
  /** update single row of the table: "_enumtable.fish_type" */
  update__enumtable_fish_type_by_pk?: Maybe<_Enumtable_Fish_Type>;
  /** update multiples rows of table: "_enumtable.fish_type" */
  update__enumtable_fish_type_many?: Maybe<Array<Maybe<_Enumtable_Fish_Type_Mutation_Response>>>;
  /** update data of the table: "_enumtable.report_reason" */
  update__enumtable_report_reason?: Maybe<_Enumtable_Report_Reason_Mutation_Response>;
  /** update single row of the table: "_enumtable.report_reason" */
  update__enumtable_report_reason_by_pk?: Maybe<_Enumtable_Report_Reason>;
  /** update multiples rows of table: "_enumtable.report_reason" */
  update__enumtable_report_reason_many?: Maybe<Array<Maybe<_Enumtable_Report_Reason_Mutation_Response>>>;
  /** update data of the table: "_enumtable.user_club_role" */
  update__enumtable_user_club_role?: Maybe<_Enumtable_User_Club_Role_Mutation_Response>;
  /** update single row of the table: "_enumtable.user_club_role" */
  update__enumtable_user_club_role_by_pk?: Maybe<_Enumtable_User_Club_Role>;
  /** update multiples rows of table: "_enumtable.user_club_role" */
  update__enumtable_user_club_role_many?: Maybe<Array<Maybe<_Enumtable_User_Club_Role_Mutation_Response>>>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_token_types" */
  update_authRefreshTokenTypes_many?: Maybe<Array<Maybe<AuthRefreshTokenTypes_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many?: Maybe<Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update data of the table: "catches" */
  update_catches?: Maybe<Catches_Mutation_Response>;
  /** update single row of the table: "catches" */
  update_catches_by_pk?: Maybe<Catches>;
  /** update multiples rows of table: "catches" */
  update_catches_many?: Maybe<Array<Maybe<Catches_Mutation_Response>>>;
  /** update data of the table: "club_documents" */
  update_club_documents?: Maybe<Club_Documents_Mutation_Response>;
  /** update single row of the table: "club_documents" */
  update_club_documents_by_pk?: Maybe<Club_Documents>;
  /** update multiples rows of table: "club_documents" */
  update_club_documents_many?: Maybe<Array<Maybe<Club_Documents_Mutation_Response>>>;
  /** update data of the table: "club_feed" */
  update_club_feed?: Maybe<Club_Feed_Mutation_Response>;
  /** update single row of the table: "club_feed" */
  update_club_feed_by_pk?: Maybe<Club_Feed>;
  /** update data of the table: "club_feed_comments" */
  update_club_feed_comments?: Maybe<Club_Feed_Comments_Mutation_Response>;
  /** update single row of the table: "club_feed_comments" */
  update_club_feed_comments_by_pk?: Maybe<Club_Feed_Comments>;
  /** update multiples rows of table: "club_feed_comments" */
  update_club_feed_comments_many?: Maybe<Array<Maybe<Club_Feed_Comments_Mutation_Response>>>;
  /** update data of the table: "club_feed_likes" */
  update_club_feed_likes?: Maybe<Club_Feed_Likes_Mutation_Response>;
  /** update single row of the table: "club_feed_likes" */
  update_club_feed_likes_by_pk?: Maybe<Club_Feed_Likes>;
  /** update multiples rows of table: "club_feed_likes" */
  update_club_feed_likes_many?: Maybe<Array<Maybe<Club_Feed_Likes_Mutation_Response>>>;
  /** update multiples rows of table: "club_feed" */
  update_club_feed_many?: Maybe<Array<Maybe<Club_Feed_Mutation_Response>>>;
  /** update data of the table: "club_waters" */
  update_club_waters?: Maybe<Club_Waters_Mutation_Response>;
  /** update single row of the table: "club_waters" */
  update_club_waters_by_pk?: Maybe<Club_Waters>;
  /** update multiples rows of table: "club_waters" */
  update_club_waters_many?: Maybe<Array<Maybe<Club_Waters_Mutation_Response>>>;
  /** update data of the table: "clubs" */
  update_clubs?: Maybe<Clubs_Mutation_Response>;
  /** update single row of the table: "clubs" */
  update_clubs_by_pk?: Maybe<Clubs>;
  /** update multiples rows of table: "clubs" */
  update_clubs_many?: Maybe<Array<Maybe<Clubs_Mutation_Response>>>;
  /** update data of the table: "documents" */
  update_documents?: Maybe<Documents_Mutation_Response>;
  /** update single row of the table: "documents" */
  update_documents_by_pk?: Maybe<Documents>;
  /** update multiples rows of table: "documents" */
  update_documents_many?: Maybe<Array<Maybe<Documents_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update data of the table: "fishing_days" */
  update_fishing_days?: Maybe<Fishing_Days_Mutation_Response>;
  /** update single row of the table: "fishing_days" */
  update_fishing_days_by_pk?: Maybe<Fishing_Days>;
  /** update multiples rows of table: "fishing_days" */
  update_fishing_days_many?: Maybe<Array<Maybe<Fishing_Days_Mutation_Response>>>;
  /** update data of the table: "reports" */
  update_reports?: Maybe<Reports_Mutation_Response>;
  /** update single row of the table: "reports" */
  update_reports_by_pk?: Maybe<Reports>;
  /** update multiples rows of table: "reports" */
  update_reports_many?: Maybe<Array<Maybe<Reports_Mutation_Response>>>;
  /** update data of the table: "user_club_relation" */
  update_user_club_relation?: Maybe<User_Club_Relation_Mutation_Response>;
  /** update single row of the table: "user_club_relation" */
  update_user_club_relation_by_pk?: Maybe<User_Club_Relation>;
  /** update multiples rows of table: "user_club_relation" */
  update_user_club_relation_many?: Maybe<Array<Maybe<User_Club_Relation_Mutation_Response>>>;
  /** update data of the table: "user_created_at" */
  update_user_created_at?: Maybe<User_Created_At_Mutation_Response>;
  /** update multiples rows of table: "user_created_at" */
  update_user_created_at_many?: Maybe<Array<Maybe<User_Created_At_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update multiples rows of table: "storage.virus" */
  update_virus_many?: Maybe<Array<Maybe<Virus_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypesArgs = {
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteVirusArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteVirusesArgs = {
  where: Virus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Enumtable_Document_StatusArgs = {
  where: _Enumtable_Document_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Enumtable_Document_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete__Enumtable_Document_TypeArgs = {
  where: _Enumtable_Document_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Enumtable_Document_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete__Enumtable_Fish_TypeArgs = {
  where: _Enumtable_Fish_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Enumtable_Fish_Type_By_PkArgs = {
  type: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete__Enumtable_Report_ReasonArgs = {
  where: _Enumtable_Report_Reason_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Enumtable_Report_Reason_By_PkArgs = {
  reason: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete__Enumtable_User_Club_RoleArgs = {
  where: _Enumtable_User_Club_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Enumtable_User_Club_Role_By_PkArgs = {
  role: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CatchesArgs = {
  where: Catches_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Catches_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Club_DocumentsArgs = {
  where: Club_Documents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Club_Documents_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Club_FeedArgs = {
  where: Club_Feed_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Club_Feed_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Club_Feed_CommentsArgs = {
  where: Club_Feed_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Club_Feed_Comments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Club_Feed_LikesArgs = {
  where: Club_Feed_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Club_Feed_Likes_By_PkArgs = {
  reaction_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Club_WatersArgs = {
  where: Club_Waters_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Club_Waters_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ClubsArgs = {
  where: Clubs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Clubs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_DocumentsArgs = {
  where: Documents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Documents_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Fishing_DaysArgs = {
  where: Fishing_Days_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fishing_Days_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ReportsArgs = {
  where: Reports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reports_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Club_RelationArgs = {
  where: User_Club_Relation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Club_Relation_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Created_AtArgs = {
  where: User_Created_At_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypeArgs = {
  object: AuthRefreshTokenTypes_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypesArgs = {
  objects: Array<AuthRefreshTokenTypes_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeys_Insert_Input;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: Array<AuthUserSecurityKeys_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertVirusArgs = {
  object: Virus_Insert_Input;
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertVirusesArgs = {
  objects: Array<Virus_Insert_Input>;
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Enumtable_Document_StatusArgs = {
  objects: Array<_Enumtable_Document_Status_Insert_Input>;
  on_conflict?: InputMaybe<_Enumtable_Document_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Enumtable_Document_Status_OneArgs = {
  object: _Enumtable_Document_Status_Insert_Input;
  on_conflict?: InputMaybe<_Enumtable_Document_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Enumtable_Document_TypeArgs = {
  objects: Array<_Enumtable_Document_Type_Insert_Input>;
  on_conflict?: InputMaybe<_Enumtable_Document_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Enumtable_Document_Type_OneArgs = {
  object: _Enumtable_Document_Type_Insert_Input;
  on_conflict?: InputMaybe<_Enumtable_Document_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Enumtable_Fish_TypeArgs = {
  objects: Array<_Enumtable_Fish_Type_Insert_Input>;
  on_conflict?: InputMaybe<_Enumtable_Fish_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Enumtable_Fish_Type_OneArgs = {
  object: _Enumtable_Fish_Type_Insert_Input;
  on_conflict?: InputMaybe<_Enumtable_Fish_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Enumtable_Report_ReasonArgs = {
  objects: Array<_Enumtable_Report_Reason_Insert_Input>;
  on_conflict?: InputMaybe<_Enumtable_Report_Reason_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Enumtable_Report_Reason_OneArgs = {
  object: _Enumtable_Report_Reason_Insert_Input;
  on_conflict?: InputMaybe<_Enumtable_Report_Reason_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Enumtable_User_Club_RoleArgs = {
  objects: Array<_Enumtable_User_Club_Role_Insert_Input>;
  on_conflict?: InputMaybe<_Enumtable_User_Club_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Enumtable_User_Club_Role_OneArgs = {
  object: _Enumtable_User_Club_Role_Insert_Input;
  on_conflict?: InputMaybe<_Enumtable_User_Club_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CatchesArgs = {
  objects: Array<Catches_Insert_Input>;
  on_conflict?: InputMaybe<Catches_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Catches_OneArgs = {
  object: Catches_Insert_Input;
  on_conflict?: InputMaybe<Catches_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Club_DocumentsArgs = {
  objects: Array<Club_Documents_Insert_Input>;
  on_conflict?: InputMaybe<Club_Documents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Club_Documents_OneArgs = {
  object: Club_Documents_Insert_Input;
  on_conflict?: InputMaybe<Club_Documents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Club_FeedArgs = {
  objects: Array<Club_Feed_Insert_Input>;
  on_conflict?: InputMaybe<Club_Feed_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Club_Feed_CommentsArgs = {
  objects: Array<Club_Feed_Comments_Insert_Input>;
  on_conflict?: InputMaybe<Club_Feed_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Club_Feed_Comments_OneArgs = {
  object: Club_Feed_Comments_Insert_Input;
  on_conflict?: InputMaybe<Club_Feed_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Club_Feed_LikesArgs = {
  objects: Array<Club_Feed_Likes_Insert_Input>;
  on_conflict?: InputMaybe<Club_Feed_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Club_Feed_Likes_OneArgs = {
  object: Club_Feed_Likes_Insert_Input;
  on_conflict?: InputMaybe<Club_Feed_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Club_Feed_OneArgs = {
  object: Club_Feed_Insert_Input;
  on_conflict?: InputMaybe<Club_Feed_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Club_WatersArgs = {
  objects: Array<Club_Waters_Insert_Input>;
  on_conflict?: InputMaybe<Club_Waters_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Club_Waters_OneArgs = {
  object: Club_Waters_Insert_Input;
  on_conflict?: InputMaybe<Club_Waters_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ClubsArgs = {
  objects: Array<Clubs_Insert_Input>;
  on_conflict?: InputMaybe<Clubs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Clubs_OneArgs = {
  object: Clubs_Insert_Input;
  on_conflict?: InputMaybe<Clubs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DocumentsArgs = {
  objects: Array<Documents_Insert_Input>;
  on_conflict?: InputMaybe<Documents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Documents_OneArgs = {
  object: Documents_Insert_Input;
  on_conflict?: InputMaybe<Documents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fishing_DaysArgs = {
  objects: Array<Fishing_Days_Insert_Input>;
  on_conflict?: InputMaybe<Fishing_Days_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fishing_Days_OneArgs = {
  object: Fishing_Days_Insert_Input;
  on_conflict?: InputMaybe<Fishing_Days_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReportsArgs = {
  objects: Array<Reports_Insert_Input>;
  on_conflict?: InputMaybe<Reports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reports_OneArgs = {
  object: Reports_Insert_Input;
  on_conflict?: InputMaybe<Reports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Club_RelationArgs = {
  objects: Array<User_Club_Relation_Insert_Input>;
  on_conflict?: InputMaybe<User_Club_Relation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Club_Relation_OneArgs = {
  object: User_Club_Relation_Insert_Input;
  on_conflict?: InputMaybe<User_Club_Relation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Created_AtArgs = {
  objects: Array<User_Created_At_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Created_At_OneArgs = {
  object: User_Created_At_Insert_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypeArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  pk_columns: AuthRefreshTokenTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypesArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _append?: InputMaybe<Files_Append_Input>;
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  _inc?: InputMaybe<Files_Inc_Input>;
  _prepend?: InputMaybe<Files_Prepend_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _append?: InputMaybe<Files_Append_Input>;
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  _inc?: InputMaybe<Files_Inc_Input>;
  _prepend?: InputMaybe<Files_Prepend_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateVirusArgs = {
  _append?: InputMaybe<Virus_Append_Input>;
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  _set?: InputMaybe<Virus_Set_Input>;
  pk_columns: Virus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateVirusesArgs = {
  _append?: InputMaybe<Virus_Append_Input>;
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  _set?: InputMaybe<Virus_Set_Input>;
  where: Virus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Enumtable_Document_StatusArgs = {
  _set?: InputMaybe<_Enumtable_Document_Status_Set_Input>;
  where: _Enumtable_Document_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Enumtable_Document_Status_By_PkArgs = {
  _set?: InputMaybe<_Enumtable_Document_Status_Set_Input>;
  pk_columns: _Enumtable_Document_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Enumtable_Document_Status_ManyArgs = {
  updates: Array<_Enumtable_Document_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate__Enumtable_Document_TypeArgs = {
  _set?: InputMaybe<_Enumtable_Document_Type_Set_Input>;
  where: _Enumtable_Document_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Enumtable_Document_Type_By_PkArgs = {
  _set?: InputMaybe<_Enumtable_Document_Type_Set_Input>;
  pk_columns: _Enumtable_Document_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Enumtable_Document_Type_ManyArgs = {
  updates: Array<_Enumtable_Document_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate__Enumtable_Fish_TypeArgs = {
  _set?: InputMaybe<_Enumtable_Fish_Type_Set_Input>;
  where: _Enumtable_Fish_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Enumtable_Fish_Type_By_PkArgs = {
  _set?: InputMaybe<_Enumtable_Fish_Type_Set_Input>;
  pk_columns: _Enumtable_Fish_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Enumtable_Fish_Type_ManyArgs = {
  updates: Array<_Enumtable_Fish_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate__Enumtable_Report_ReasonArgs = {
  _set?: InputMaybe<_Enumtable_Report_Reason_Set_Input>;
  where: _Enumtable_Report_Reason_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Enumtable_Report_Reason_By_PkArgs = {
  _set?: InputMaybe<_Enumtable_Report_Reason_Set_Input>;
  pk_columns: _Enumtable_Report_Reason_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Enumtable_Report_Reason_ManyArgs = {
  updates: Array<_Enumtable_Report_Reason_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate__Enumtable_User_Club_RoleArgs = {
  _set?: InputMaybe<_Enumtable_User_Club_Role_Set_Input>;
  where: _Enumtable_User_Club_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Enumtable_User_Club_Role_By_PkArgs = {
  _set?: InputMaybe<_Enumtable_User_Club_Role_Set_Input>;
  pk_columns: _Enumtable_User_Club_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Enumtable_User_Club_Role_ManyArgs = {
  updates: Array<_Enumtable_User_Club_Role_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokenTypes_ManyArgs = {
  updates: Array<AuthRefreshTokenTypes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
  updates: Array<AuthUserSecurityKeys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CatchesArgs = {
  _inc?: InputMaybe<Catches_Inc_Input>;
  _set?: InputMaybe<Catches_Set_Input>;
  where: Catches_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Catches_By_PkArgs = {
  _inc?: InputMaybe<Catches_Inc_Input>;
  _set?: InputMaybe<Catches_Set_Input>;
  pk_columns: Catches_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Catches_ManyArgs = {
  updates: Array<Catches_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Club_DocumentsArgs = {
  _inc?: InputMaybe<Club_Documents_Inc_Input>;
  _set?: InputMaybe<Club_Documents_Set_Input>;
  where: Club_Documents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Club_Documents_By_PkArgs = {
  _inc?: InputMaybe<Club_Documents_Inc_Input>;
  _set?: InputMaybe<Club_Documents_Set_Input>;
  pk_columns: Club_Documents_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Club_Documents_ManyArgs = {
  updates: Array<Club_Documents_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Club_FeedArgs = {
  _set?: InputMaybe<Club_Feed_Set_Input>;
  where: Club_Feed_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Club_Feed_By_PkArgs = {
  _set?: InputMaybe<Club_Feed_Set_Input>;
  pk_columns: Club_Feed_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Club_Feed_CommentsArgs = {
  _set?: InputMaybe<Club_Feed_Comments_Set_Input>;
  where: Club_Feed_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Club_Feed_Comments_By_PkArgs = {
  _set?: InputMaybe<Club_Feed_Comments_Set_Input>;
  pk_columns: Club_Feed_Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Club_Feed_Comments_ManyArgs = {
  updates: Array<Club_Feed_Comments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Club_Feed_LikesArgs = {
  _set?: InputMaybe<Club_Feed_Likes_Set_Input>;
  where: Club_Feed_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Club_Feed_Likes_By_PkArgs = {
  _set?: InputMaybe<Club_Feed_Likes_Set_Input>;
  pk_columns: Club_Feed_Likes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Club_Feed_Likes_ManyArgs = {
  updates: Array<Club_Feed_Likes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Club_Feed_ManyArgs = {
  updates: Array<Club_Feed_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Club_WatersArgs = {
  _append?: InputMaybe<Club_Waters_Append_Input>;
  _delete_at_path?: InputMaybe<Club_Waters_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Club_Waters_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Club_Waters_Delete_Key_Input>;
  _prepend?: InputMaybe<Club_Waters_Prepend_Input>;
  _set?: InputMaybe<Club_Waters_Set_Input>;
  where: Club_Waters_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Club_Waters_By_PkArgs = {
  _append?: InputMaybe<Club_Waters_Append_Input>;
  _delete_at_path?: InputMaybe<Club_Waters_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Club_Waters_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Club_Waters_Delete_Key_Input>;
  _prepend?: InputMaybe<Club_Waters_Prepend_Input>;
  _set?: InputMaybe<Club_Waters_Set_Input>;
  pk_columns: Club_Waters_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Club_Waters_ManyArgs = {
  updates: Array<Club_Waters_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ClubsArgs = {
  _inc?: InputMaybe<Clubs_Inc_Input>;
  _set?: InputMaybe<Clubs_Set_Input>;
  where: Clubs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Clubs_By_PkArgs = {
  _inc?: InputMaybe<Clubs_Inc_Input>;
  _set?: InputMaybe<Clubs_Set_Input>;
  pk_columns: Clubs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Clubs_ManyArgs = {
  updates: Array<Clubs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DocumentsArgs = {
  _inc?: InputMaybe<Documents_Inc_Input>;
  _set?: InputMaybe<Documents_Set_Input>;
  where: Documents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Documents_By_PkArgs = {
  _inc?: InputMaybe<Documents_Inc_Input>;
  _set?: InputMaybe<Documents_Set_Input>;
  pk_columns: Documents_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Documents_ManyArgs = {
  updates: Array<Documents_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Fishing_DaysArgs = {
  _set?: InputMaybe<Fishing_Days_Set_Input>;
  where: Fishing_Days_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fishing_Days_By_PkArgs = {
  _set?: InputMaybe<Fishing_Days_Set_Input>;
  pk_columns: Fishing_Days_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Fishing_Days_ManyArgs = {
  updates: Array<Fishing_Days_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ReportsArgs = {
  _set?: InputMaybe<Reports_Set_Input>;
  where: Reports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reports_By_PkArgs = {
  _set?: InputMaybe<Reports_Set_Input>;
  pk_columns: Reports_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Reports_ManyArgs = {
  updates: Array<Reports_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Club_RelationArgs = {
  _set?: InputMaybe<User_Club_Relation_Set_Input>;
  where: User_Club_Relation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Club_Relation_By_PkArgs = {
  _set?: InputMaybe<User_Club_Relation_Set_Input>;
  pk_columns: User_Club_Relation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Club_Relation_ManyArgs = {
  updates: Array<User_Club_Relation_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Created_AtArgs = {
  _set?: InputMaybe<User_Created_At_Set_Input>;
  where: User_Created_At_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Created_At_ManyArgs = {
  updates: Array<User_Created_At_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Virus_ManyArgs = {
  updates: Array<Virus_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "_enumtable.document_status" */
  _enumtable_document_status: Array<_Enumtable_Document_Status>;
  /** fetch aggregated fields from the table: "_enumtable.document_status" */
  _enumtable_document_status_aggregate: _Enumtable_Document_Status_Aggregate;
  /** fetch data from the table: "_enumtable.document_status" using primary key columns */
  _enumtable_document_status_by_pk?: Maybe<_Enumtable_Document_Status>;
  /** fetch data from the table: "_enumtable.document_type" */
  _enumtable_document_type: Array<_Enumtable_Document_Type>;
  /** fetch aggregated fields from the table: "_enumtable.document_type" */
  _enumtable_document_type_aggregate: _Enumtable_Document_Type_Aggregate;
  /** fetch data from the table: "_enumtable.document_type" using primary key columns */
  _enumtable_document_type_by_pk?: Maybe<_Enumtable_Document_Type>;
  /** fetch data from the table: "_enumtable.fish_type" */
  _enumtable_fish_type: Array<_Enumtable_Fish_Type>;
  /** fetch aggregated fields from the table: "_enumtable.fish_type" */
  _enumtable_fish_type_aggregate: _Enumtable_Fish_Type_Aggregate;
  /** fetch data from the table: "_enumtable.fish_type" using primary key columns */
  _enumtable_fish_type_by_pk?: Maybe<_Enumtable_Fish_Type>;
  /** fetch data from the table: "_enumtable.report_reason" */
  _enumtable_report_reason: Array<_Enumtable_Report_Reason>;
  /** fetch aggregated fields from the table: "_enumtable.report_reason" */
  _enumtable_report_reason_aggregate: _Enumtable_Report_Reason_Aggregate;
  /** fetch data from the table: "_enumtable.report_reason" using primary key columns */
  _enumtable_report_reason_by_pk?: Maybe<_Enumtable_Report_Reason>;
  /** fetch data from the table: "_enumtable.user_club_role" */
  _enumtable_user_club_role: Array<_Enumtable_User_Club_Role>;
  /** fetch aggregated fields from the table: "_enumtable.user_club_role" */
  _enumtable_user_club_role_aggregate: _Enumtable_User_Club_Role_Aggregate;
  /** fetch data from the table: "_enumtable.user_club_role" using primary key columns */
  _enumtable_user_club_role_by_pk?: Maybe<_Enumtable_User_Club_Role>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** An array relationship */
  catches: Array<Catches>;
  /** An aggregate relationship */
  catches_aggregate: Catches_Aggregate;
  /** fetch data from the table: "catches" using primary key columns */
  catches_by_pk?: Maybe<Catches>;
  /** An array relationship */
  club_documents: Array<Club_Documents>;
  /** An aggregate relationship */
  club_documents_aggregate: Club_Documents_Aggregate;
  /** fetch data from the table: "club_documents" using primary key columns */
  club_documents_by_pk?: Maybe<Club_Documents>;
  /** fetch data from the table: "club_feed" */
  club_feed: Array<Club_Feed>;
  /** fetch aggregated fields from the table: "club_feed" */
  club_feed_aggregate: Club_Feed_Aggregate;
  /** fetch data from the table: "club_feed" using primary key columns */
  club_feed_by_pk?: Maybe<Club_Feed>;
  /** fetch data from the table: "club_feed_comments" */
  club_feed_comments: Array<Club_Feed_Comments>;
  /** fetch aggregated fields from the table: "club_feed_comments" */
  club_feed_comments_aggregate: Club_Feed_Comments_Aggregate;
  /** fetch data from the table: "club_feed_comments" using primary key columns */
  club_feed_comments_by_pk?: Maybe<Club_Feed_Comments>;
  /** fetch data from the table: "club_feed_image_mapping" */
  club_feed_image_mapping: Array<Club_Feed_Image_Mapping>;
  /** fetch aggregated fields from the table: "club_feed_image_mapping" */
  club_feed_image_mapping_aggregate: Club_Feed_Image_Mapping_Aggregate;
  /** fetch data from the table: "club_feed_likes" */
  club_feed_likes: Array<Club_Feed_Likes>;
  /** fetch aggregated fields from the table: "club_feed_likes" */
  club_feed_likes_aggregate: Club_Feed_Likes_Aggregate;
  /** fetch data from the table: "club_feed_likes" using primary key columns */
  club_feed_likes_by_pk?: Maybe<Club_Feed_Likes>;
  /** fetch data from the table: "club_user_counts" */
  club_user_counts: Array<Club_User_Counts>;
  /** fetch aggregated fields from the table: "club_user_counts" */
  club_user_counts_aggregate: Club_User_Counts_Aggregate;
  /** fetch data from the table: "club_waters" */
  club_waters: Array<Club_Waters>;
  /** fetch aggregated fields from the table: "club_waters" */
  club_waters_aggregate: Club_Waters_Aggregate;
  /** fetch data from the table: "club_waters" using primary key columns */
  club_waters_by_pk?: Maybe<Club_Waters>;
  /** fetch data from the table: "clubs" */
  clubs: Array<Clubs>;
  /** fetch aggregated fields from the table: "clubs" */
  clubs_aggregate: Clubs_Aggregate;
  /** fetch data from the table: "clubs" using primary key columns */
  clubs_by_pk?: Maybe<Clubs>;
  /** execute function "clubs_nearby" which returns "clubs" */
  clubs_nearby: Array<Clubs>;
  /** execute function "clubs_nearby" and query aggregates on result of table type "clubs" */
  clubs_nearby_aggregate: Clubs_Aggregate;
  /** An array relationship */
  documents: Array<Documents>;
  /** An aggregate relationship */
  documents_aggregate: Documents_Aggregate;
  /** fetch data from the table: "documents" using primary key columns */
  documents_by_pk?: Maybe<Documents>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "fishing_days" */
  fishing_days: Array<Fishing_Days>;
  /** fetch aggregated fields from the table: "fishing_days" */
  fishing_days_aggregate: Fishing_Days_Aggregate;
  /** fetch data from the table: "fishing_days" using primary key columns */
  fishing_days_by_pk?: Maybe<Fishing_Days>;
  /** getClubFeed */
  getClubFeed: Array<ClubFeedOutput>;
  /** getClubFeedComments */
  getClubFeedComments: Array<ClubFeedComments>;
  getClubUsers: GetClubMembersOutput;
  /** fetch data from the table: "reports" */
  reports: Array<Reports>;
  /** fetch aggregated fields from the table: "reports" */
  reports_aggregate: Reports_Aggregate;
  /** fetch data from the table: "reports" using primary key columns */
  reports_by_pk?: Maybe<Reports>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_club_relation" */
  user_club_relation: Array<User_Club_Relation>;
  /** fetch aggregated fields from the table: "user_club_relation" */
  user_club_relation_aggregate: User_Club_Relation_Aggregate;
  /** fetch data from the table: "user_club_relation" using primary key columns */
  user_club_relation_by_pk?: Maybe<User_Club_Relation>;
  /** fetch data from the table: "user_created_at" */
  user_created_at: Array<User_Created_At>;
  /** fetch aggregated fields from the table: "user_created_at" */
  user_created_at_aggregate: User_Created_At_Aggregate;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate;
};


export type Query_Root_Enumtable_Document_StatusArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_Document_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_Document_Status_Order_By>>;
  where?: InputMaybe<_Enumtable_Document_Status_Bool_Exp>;
};


export type Query_Root_Enumtable_Document_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_Document_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_Document_Status_Order_By>>;
  where?: InputMaybe<_Enumtable_Document_Status_Bool_Exp>;
};


export type Query_Root_Enumtable_Document_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_Root_Enumtable_Document_TypeArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_Document_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_Document_Type_Order_By>>;
  where?: InputMaybe<_Enumtable_Document_Type_Bool_Exp>;
};


export type Query_Root_Enumtable_Document_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_Document_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_Document_Type_Order_By>>;
  where?: InputMaybe<_Enumtable_Document_Type_Bool_Exp>;
};


export type Query_Root_Enumtable_Document_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_Root_Enumtable_Fish_TypeArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_Fish_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_Fish_Type_Order_By>>;
  where?: InputMaybe<_Enumtable_Fish_Type_Bool_Exp>;
};


export type Query_Root_Enumtable_Fish_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_Fish_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_Fish_Type_Order_By>>;
  where?: InputMaybe<_Enumtable_Fish_Type_Bool_Exp>;
};


export type Query_Root_Enumtable_Fish_Type_By_PkArgs = {
  type: Scalars['String']['input'];
};


export type Query_Root_Enumtable_Report_ReasonArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_Report_Reason_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_Report_Reason_Order_By>>;
  where?: InputMaybe<_Enumtable_Report_Reason_Bool_Exp>;
};


export type Query_Root_Enumtable_Report_Reason_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_Report_Reason_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_Report_Reason_Order_By>>;
  where?: InputMaybe<_Enumtable_Report_Reason_Bool_Exp>;
};


export type Query_Root_Enumtable_Report_Reason_By_PkArgs = {
  reason: Scalars['String']['input'];
};


export type Query_Root_Enumtable_User_Club_RoleArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_User_Club_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_User_Club_Role_Order_By>>;
  where?: InputMaybe<_Enumtable_User_Club_Role_Bool_Exp>;
};


export type Query_Root_Enumtable_User_Club_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_User_Club_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_User_Club_Role_Order_By>>;
  where?: InputMaybe<_Enumtable_User_Club_Role_Bool_Exp>;
};


export type Query_Root_Enumtable_User_Club_Role_By_PkArgs = {
  role: Scalars['String']['input'];
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String']['input'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootBucketArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootCatchesArgs = {
  distinct_on?: InputMaybe<Array<Catches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Catches_Order_By>>;
  where?: InputMaybe<Catches_Bool_Exp>;
};


export type Query_RootCatches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Catches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Catches_Order_By>>;
  where?: InputMaybe<Catches_Bool_Exp>;
};


export type Query_RootCatches_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootClub_DocumentsArgs = {
  distinct_on?: InputMaybe<Array<Club_Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Documents_Order_By>>;
  where?: InputMaybe<Club_Documents_Bool_Exp>;
};


export type Query_RootClub_Documents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Documents_Order_By>>;
  where?: InputMaybe<Club_Documents_Bool_Exp>;
};


export type Query_RootClub_Documents_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootClub_FeedArgs = {
  distinct_on?: InputMaybe<Array<Club_Feed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Feed_Order_By>>;
  where?: InputMaybe<Club_Feed_Bool_Exp>;
};


export type Query_RootClub_Feed_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Feed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Feed_Order_By>>;
  where?: InputMaybe<Club_Feed_Bool_Exp>;
};


export type Query_RootClub_Feed_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootClub_Feed_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Club_Feed_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Feed_Comments_Order_By>>;
  where?: InputMaybe<Club_Feed_Comments_Bool_Exp>;
};


export type Query_RootClub_Feed_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Feed_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Feed_Comments_Order_By>>;
  where?: InputMaybe<Club_Feed_Comments_Bool_Exp>;
};


export type Query_RootClub_Feed_Comments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootClub_Feed_Image_MappingArgs = {
  distinct_on?: InputMaybe<Array<Club_Feed_Image_Mapping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Feed_Image_Mapping_Order_By>>;
  where?: InputMaybe<Club_Feed_Image_Mapping_Bool_Exp>;
};


export type Query_RootClub_Feed_Image_Mapping_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Feed_Image_Mapping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Feed_Image_Mapping_Order_By>>;
  where?: InputMaybe<Club_Feed_Image_Mapping_Bool_Exp>;
};


export type Query_RootClub_Feed_LikesArgs = {
  distinct_on?: InputMaybe<Array<Club_Feed_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Feed_Likes_Order_By>>;
  where?: InputMaybe<Club_Feed_Likes_Bool_Exp>;
};


export type Query_RootClub_Feed_Likes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Feed_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Feed_Likes_Order_By>>;
  where?: InputMaybe<Club_Feed_Likes_Bool_Exp>;
};


export type Query_RootClub_Feed_Likes_By_PkArgs = {
  reaction_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Query_RootClub_User_CountsArgs = {
  distinct_on?: InputMaybe<Array<Club_User_Counts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_User_Counts_Order_By>>;
  where?: InputMaybe<Club_User_Counts_Bool_Exp>;
};


export type Query_RootClub_User_Counts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_User_Counts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_User_Counts_Order_By>>;
  where?: InputMaybe<Club_User_Counts_Bool_Exp>;
};


export type Query_RootClub_WatersArgs = {
  distinct_on?: InputMaybe<Array<Club_Waters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Waters_Order_By>>;
  where?: InputMaybe<Club_Waters_Bool_Exp>;
};


export type Query_RootClub_Waters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Waters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Waters_Order_By>>;
  where?: InputMaybe<Club_Waters_Bool_Exp>;
};


export type Query_RootClub_Waters_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootClubsArgs = {
  distinct_on?: InputMaybe<Array<Clubs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clubs_Order_By>>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};


export type Query_RootClubs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Clubs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clubs_Order_By>>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};


export type Query_RootClubs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootClubs_NearbyArgs = {
  args: Clubs_Nearby_Args;
  distinct_on?: InputMaybe<Array<Clubs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clubs_Order_By>>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};


export type Query_RootClubs_Nearby_AggregateArgs = {
  args: Clubs_Nearby_Args;
  distinct_on?: InputMaybe<Array<Clubs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clubs_Order_By>>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};


export type Query_RootDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Query_RootDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Query_RootDocuments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFileArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFishing_DaysArgs = {
  distinct_on?: InputMaybe<Array<Fishing_Days_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fishing_Days_Order_By>>;
  where?: InputMaybe<Fishing_Days_Bool_Exp>;
};


export type Query_RootFishing_Days_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fishing_Days_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fishing_Days_Order_By>>;
  where?: InputMaybe<Fishing_Days_Bool_Exp>;
};


export type Query_RootFishing_Days_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootGetClubFeedArgs = {
  date_time: Scalars['timestamptz']['input'];
  limit_count?: InputMaybe<Scalars['Int']['input']>;
  offset_count?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};


export type Query_RootGetClubFeedCommentsArgs = {
  date_time: Scalars['timestamptz']['input'];
  limit_count?: InputMaybe<Scalars['Int']['input']>;
  offset_count?: InputMaybe<Scalars['Int']['input']>;
  order_by: Scalars['String']['input'];
  post_id: Scalars['uuid']['input'];
};


export type Query_RootGetClubUsersArgs = {
  clubId: Scalars['uuid']['input'];
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<ClubUserOrderByEnum>>;
  pending?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type Query_RootReportsArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


export type Query_RootReports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


export type Query_RootReports_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_Club_RelationArgs = {
  distinct_on?: InputMaybe<Array<User_Club_Relation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Club_Relation_Order_By>>;
  where?: InputMaybe<User_Club_Relation_Bool_Exp>;
};


export type Query_RootUser_Club_Relation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Club_Relation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Club_Relation_Order_By>>;
  where?: InputMaybe<User_Club_Relation_Bool_Exp>;
};


export type Query_RootUser_Club_Relation_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_Created_AtArgs = {
  distinct_on?: InputMaybe<Array<User_Created_At_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Created_At_Order_By>>;
  where?: InputMaybe<User_Created_At_Bool_Exp>;
};


export type Query_RootUser_Created_At_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Created_At_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Created_At_Order_By>>;
  where?: InputMaybe<User_Created_At_Bool_Exp>;
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootVirusArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Query_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** columns and relationships of "reports" */
export type Reports = {
  __typename?: 'reports';
  id: Scalars['uuid']['output'];
  reportDetails?: Maybe<Scalars['String']['output']>;
  reportReason: _Enumtable_Report_Reason_Enum;
  reportedId: Scalars['uuid']['output'];
  /** An object relationship */
  reported_feed?: Maybe<Club_Feed>;
};

/** aggregated selection of "reports" */
export type Reports_Aggregate = {
  __typename?: 'reports_aggregate';
  aggregate?: Maybe<Reports_Aggregate_Fields>;
  nodes: Array<Reports>;
};

/** aggregate fields of "reports" */
export type Reports_Aggregate_Fields = {
  __typename?: 'reports_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Reports_Max_Fields>;
  min?: Maybe<Reports_Min_Fields>;
};


/** aggregate fields of "reports" */
export type Reports_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reports_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "reports". All fields are combined with a logical 'AND'. */
export type Reports_Bool_Exp = {
  _and?: InputMaybe<Array<Reports_Bool_Exp>>;
  _not?: InputMaybe<Reports_Bool_Exp>;
  _or?: InputMaybe<Array<Reports_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  reportDetails?: InputMaybe<String_Comparison_Exp>;
  reportReason?: InputMaybe<_Enumtable_Report_Reason_Enum_Comparison_Exp>;
  reportedId?: InputMaybe<Uuid_Comparison_Exp>;
  reported_feed?: InputMaybe<Club_Feed_Bool_Exp>;
};

/** unique or primary key constraints on table "reports" */
export enum Reports_Constraint {
  /** unique or primary key constraint on columns "id" */
  ReportsPkey = 'reports_pkey'
}

/** input type for inserting data into table "reports" */
export type Reports_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  reportDetails?: InputMaybe<Scalars['String']['input']>;
  reportReason?: InputMaybe<_Enumtable_Report_Reason_Enum>;
  reportedId?: InputMaybe<Scalars['uuid']['input']>;
  reported_feed?: InputMaybe<Club_Feed_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Reports_Max_Fields = {
  __typename?: 'reports_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  reportDetails?: Maybe<Scalars['String']['output']>;
  reportedId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Reports_Min_Fields = {
  __typename?: 'reports_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  reportDetails?: Maybe<Scalars['String']['output']>;
  reportedId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "reports" */
export type Reports_Mutation_Response = {
  __typename?: 'reports_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Reports>;
};

/** on_conflict condition type for table "reports" */
export type Reports_On_Conflict = {
  constraint: Reports_Constraint;
  update_columns?: Array<Reports_Update_Column>;
  where?: InputMaybe<Reports_Bool_Exp>;
};

/** Ordering options when selecting data from "reports". */
export type Reports_Order_By = {
  id?: InputMaybe<Order_By>;
  reportDetails?: InputMaybe<Order_By>;
  reportReason?: InputMaybe<Order_By>;
  reportedId?: InputMaybe<Order_By>;
  reported_feed?: InputMaybe<Club_Feed_Order_By>;
};

/** primary key columns input for table: reports */
export type Reports_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "reports" */
export enum Reports_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ReportDetails = 'reportDetails',
  /** column name */
  ReportReason = 'reportReason',
  /** column name */
  ReportedId = 'reportedId'
}

/** input type for updating data in table "reports" */
export type Reports_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  reportDetails?: InputMaybe<Scalars['String']['input']>;
  reportReason?: InputMaybe<_Enumtable_Report_Reason_Enum>;
  reportedId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "reports" */
export type Reports_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Reports_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Reports_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  reportDetails?: InputMaybe<Scalars['String']['input']>;
  reportReason?: InputMaybe<_Enumtable_Report_Reason_Enum>;
  reportedId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "reports" */
export enum Reports_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ReportDetails = 'reportDetails',
  /** column name */
  ReportReason = 'reportReason',
  /** column name */
  ReportedId = 'reportedId'
}

export type Reports_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Reports_Set_Input>;
  /** filter the rows which have to be updated */
  where: Reports_Bool_Exp;
};

export type St_D_Within_Geography_Input = {
  distance: Scalars['Float']['input'];
  from: Scalars['geography']['input'];
  use_spheroid?: InputMaybe<Scalars['Boolean']['input']>;
};

export type St_D_Within_Input = {
  distance: Scalars['Float']['input'];
  from: Scalars['geometry']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "_enumtable.document_status" */
  _enumtable_document_status: Array<_Enumtable_Document_Status>;
  /** fetch aggregated fields from the table: "_enumtable.document_status" */
  _enumtable_document_status_aggregate: _Enumtable_Document_Status_Aggregate;
  /** fetch data from the table: "_enumtable.document_status" using primary key columns */
  _enumtable_document_status_by_pk?: Maybe<_Enumtable_Document_Status>;
  /** fetch data from the table in a streaming manner: "_enumtable.document_status" */
  _enumtable_document_status_stream: Array<_Enumtable_Document_Status>;
  /** fetch data from the table: "_enumtable.document_type" */
  _enumtable_document_type: Array<_Enumtable_Document_Type>;
  /** fetch aggregated fields from the table: "_enumtable.document_type" */
  _enumtable_document_type_aggregate: _Enumtable_Document_Type_Aggregate;
  /** fetch data from the table: "_enumtable.document_type" using primary key columns */
  _enumtable_document_type_by_pk?: Maybe<_Enumtable_Document_Type>;
  /** fetch data from the table in a streaming manner: "_enumtable.document_type" */
  _enumtable_document_type_stream: Array<_Enumtable_Document_Type>;
  /** fetch data from the table: "_enumtable.fish_type" */
  _enumtable_fish_type: Array<_Enumtable_Fish_Type>;
  /** fetch aggregated fields from the table: "_enumtable.fish_type" */
  _enumtable_fish_type_aggregate: _Enumtable_Fish_Type_Aggregate;
  /** fetch data from the table: "_enumtable.fish_type" using primary key columns */
  _enumtable_fish_type_by_pk?: Maybe<_Enumtable_Fish_Type>;
  /** fetch data from the table in a streaming manner: "_enumtable.fish_type" */
  _enumtable_fish_type_stream: Array<_Enumtable_Fish_Type>;
  /** fetch data from the table: "_enumtable.report_reason" */
  _enumtable_report_reason: Array<_Enumtable_Report_Reason>;
  /** fetch aggregated fields from the table: "_enumtable.report_reason" */
  _enumtable_report_reason_aggregate: _Enumtable_Report_Reason_Aggregate;
  /** fetch data from the table: "_enumtable.report_reason" using primary key columns */
  _enumtable_report_reason_by_pk?: Maybe<_Enumtable_Report_Reason>;
  /** fetch data from the table in a streaming manner: "_enumtable.report_reason" */
  _enumtable_report_reason_stream: Array<_Enumtable_Report_Reason>;
  /** fetch data from the table: "_enumtable.user_club_role" */
  _enumtable_user_club_role: Array<_Enumtable_User_Club_Role>;
  /** fetch aggregated fields from the table: "_enumtable.user_club_role" */
  _enumtable_user_club_role_aggregate: _Enumtable_User_Club_Role_Aggregate;
  /** fetch data from the table: "_enumtable.user_club_role" using primary key columns */
  _enumtable_user_club_role_by_pk?: Maybe<_Enumtable_User_Club_Role>;
  /** fetch data from the table in a streaming manner: "_enumtable.user_club_role" */
  _enumtable_user_club_role_stream: Array<_Enumtable_User_Club_Role>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_token_types" */
  authRefreshTokenTypes_stream: Array<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<AuthRoles>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<AuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<Buckets>;
  /** An array relationship */
  catches: Array<Catches>;
  /** An aggregate relationship */
  catches_aggregate: Catches_Aggregate;
  /** fetch data from the table: "catches" using primary key columns */
  catches_by_pk?: Maybe<Catches>;
  /** fetch data from the table in a streaming manner: "catches" */
  catches_stream: Array<Catches>;
  /** An array relationship */
  club_documents: Array<Club_Documents>;
  /** An aggregate relationship */
  club_documents_aggregate: Club_Documents_Aggregate;
  /** fetch data from the table: "club_documents" using primary key columns */
  club_documents_by_pk?: Maybe<Club_Documents>;
  /** fetch data from the table in a streaming manner: "club_documents" */
  club_documents_stream: Array<Club_Documents>;
  /** fetch data from the table: "club_feed" */
  club_feed: Array<Club_Feed>;
  /** fetch aggregated fields from the table: "club_feed" */
  club_feed_aggregate: Club_Feed_Aggregate;
  /** fetch data from the table: "club_feed" using primary key columns */
  club_feed_by_pk?: Maybe<Club_Feed>;
  /** fetch data from the table: "club_feed_comments" */
  club_feed_comments: Array<Club_Feed_Comments>;
  /** fetch aggregated fields from the table: "club_feed_comments" */
  club_feed_comments_aggregate: Club_Feed_Comments_Aggregate;
  /** fetch data from the table: "club_feed_comments" using primary key columns */
  club_feed_comments_by_pk?: Maybe<Club_Feed_Comments>;
  /** fetch data from the table in a streaming manner: "club_feed_comments" */
  club_feed_comments_stream: Array<Club_Feed_Comments>;
  /** fetch data from the table: "club_feed_image_mapping" */
  club_feed_image_mapping: Array<Club_Feed_Image_Mapping>;
  /** fetch aggregated fields from the table: "club_feed_image_mapping" */
  club_feed_image_mapping_aggregate: Club_Feed_Image_Mapping_Aggregate;
  /** fetch data from the table in a streaming manner: "club_feed_image_mapping" */
  club_feed_image_mapping_stream: Array<Club_Feed_Image_Mapping>;
  /** fetch data from the table: "club_feed_likes" */
  club_feed_likes: Array<Club_Feed_Likes>;
  /** fetch aggregated fields from the table: "club_feed_likes" */
  club_feed_likes_aggregate: Club_Feed_Likes_Aggregate;
  /** fetch data from the table: "club_feed_likes" using primary key columns */
  club_feed_likes_by_pk?: Maybe<Club_Feed_Likes>;
  /** fetch data from the table in a streaming manner: "club_feed_likes" */
  club_feed_likes_stream: Array<Club_Feed_Likes>;
  /** fetch data from the table in a streaming manner: "club_feed" */
  club_feed_stream: Array<Club_Feed>;
  /** fetch data from the table: "club_user_counts" */
  club_user_counts: Array<Club_User_Counts>;
  /** fetch aggregated fields from the table: "club_user_counts" */
  club_user_counts_aggregate: Club_User_Counts_Aggregate;
  /** fetch data from the table in a streaming manner: "club_user_counts" */
  club_user_counts_stream: Array<Club_User_Counts>;
  /** fetch data from the table: "club_waters" */
  club_waters: Array<Club_Waters>;
  /** fetch aggregated fields from the table: "club_waters" */
  club_waters_aggregate: Club_Waters_Aggregate;
  /** fetch data from the table: "club_waters" using primary key columns */
  club_waters_by_pk?: Maybe<Club_Waters>;
  /** fetch data from the table in a streaming manner: "club_waters" */
  club_waters_stream: Array<Club_Waters>;
  /** fetch data from the table: "clubs" */
  clubs: Array<Clubs>;
  /** fetch aggregated fields from the table: "clubs" */
  clubs_aggregate: Clubs_Aggregate;
  /** fetch data from the table: "clubs" using primary key columns */
  clubs_by_pk?: Maybe<Clubs>;
  /** execute function "clubs_nearby" which returns "clubs" */
  clubs_nearby: Array<Clubs>;
  /** execute function "clubs_nearby" and query aggregates on result of table type "clubs" */
  clubs_nearby_aggregate: Clubs_Aggregate;
  /** fetch data from the table in a streaming manner: "clubs" */
  clubs_stream: Array<Clubs>;
  /** An array relationship */
  documents: Array<Documents>;
  /** An aggregate relationship */
  documents_aggregate: Documents_Aggregate;
  /** fetch data from the table: "documents" using primary key columns */
  documents_by_pk?: Maybe<Documents>;
  /** fetch data from the table in a streaming manner: "documents" */
  documents_stream: Array<Documents>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<Files>;
  /** fetch data from the table: "fishing_days" */
  fishing_days: Array<Fishing_Days>;
  /** fetch aggregated fields from the table: "fishing_days" */
  fishing_days_aggregate: Fishing_Days_Aggregate;
  /** fetch data from the table: "fishing_days" using primary key columns */
  fishing_days_by_pk?: Maybe<Fishing_Days>;
  /** fetch data from the table in a streaming manner: "fishing_days" */
  fishing_days_stream: Array<Fishing_Days>;
  /** fetch data from the table: "reports" */
  reports: Array<Reports>;
  /** fetch aggregated fields from the table: "reports" */
  reports_aggregate: Reports_Aggregate;
  /** fetch data from the table: "reports" using primary key columns */
  reports_by_pk?: Maybe<Reports>;
  /** fetch data from the table in a streaming manner: "reports" */
  reports_stream: Array<Reports>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_club_relation" */
  user_club_relation: Array<User_Club_Relation>;
  /** fetch aggregated fields from the table: "user_club_relation" */
  user_club_relation_aggregate: User_Club_Relation_Aggregate;
  /** fetch data from the table: "user_club_relation" using primary key columns */
  user_club_relation_by_pk?: Maybe<User_Club_Relation>;
  /** fetch data from the table in a streaming manner: "user_club_relation" */
  user_club_relation_stream: Array<User_Club_Relation>;
  /** fetch data from the table: "user_created_at" */
  user_created_at: Array<User_Created_At>;
  /** fetch aggregated fields from the table: "user_created_at" */
  user_created_at_aggregate: User_Created_At_Aggregate;
  /** fetch data from the table in a streaming manner: "user_created_at" */
  user_created_at_stream: Array<User_Created_At>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>;
  /** fetch data from the table in a streaming manner: "storage.virus" */
  virus_stream: Array<Virus>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate;
};


export type Subscription_Root_Enumtable_Document_StatusArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_Document_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_Document_Status_Order_By>>;
  where?: InputMaybe<_Enumtable_Document_Status_Bool_Exp>;
};


export type Subscription_Root_Enumtable_Document_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_Document_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_Document_Status_Order_By>>;
  where?: InputMaybe<_Enumtable_Document_Status_Bool_Exp>;
};


export type Subscription_Root_Enumtable_Document_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_Root_Enumtable_Document_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<_Enumtable_Document_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<_Enumtable_Document_Status_Bool_Exp>;
};


export type Subscription_Root_Enumtable_Document_TypeArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_Document_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_Document_Type_Order_By>>;
  where?: InputMaybe<_Enumtable_Document_Type_Bool_Exp>;
};


export type Subscription_Root_Enumtable_Document_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_Document_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_Document_Type_Order_By>>;
  where?: InputMaybe<_Enumtable_Document_Type_Bool_Exp>;
};


export type Subscription_Root_Enumtable_Document_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_Root_Enumtable_Document_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<_Enumtable_Document_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<_Enumtable_Document_Type_Bool_Exp>;
};


export type Subscription_Root_Enumtable_Fish_TypeArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_Fish_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_Fish_Type_Order_By>>;
  where?: InputMaybe<_Enumtable_Fish_Type_Bool_Exp>;
};


export type Subscription_Root_Enumtable_Fish_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_Fish_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_Fish_Type_Order_By>>;
  where?: InputMaybe<_Enumtable_Fish_Type_Bool_Exp>;
};


export type Subscription_Root_Enumtable_Fish_Type_By_PkArgs = {
  type: Scalars['String']['input'];
};


export type Subscription_Root_Enumtable_Fish_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<_Enumtable_Fish_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<_Enumtable_Fish_Type_Bool_Exp>;
};


export type Subscription_Root_Enumtable_Report_ReasonArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_Report_Reason_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_Report_Reason_Order_By>>;
  where?: InputMaybe<_Enumtable_Report_Reason_Bool_Exp>;
};


export type Subscription_Root_Enumtable_Report_Reason_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_Report_Reason_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_Report_Reason_Order_By>>;
  where?: InputMaybe<_Enumtable_Report_Reason_Bool_Exp>;
};


export type Subscription_Root_Enumtable_Report_Reason_By_PkArgs = {
  reason: Scalars['String']['input'];
};


export type Subscription_Root_Enumtable_Report_Reason_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<_Enumtable_Report_Reason_Stream_Cursor_Input>>;
  where?: InputMaybe<_Enumtable_Report_Reason_Bool_Exp>;
};


export type Subscription_Root_Enumtable_User_Club_RoleArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_User_Club_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_User_Club_Role_Order_By>>;
  where?: InputMaybe<_Enumtable_User_Club_Role_Bool_Exp>;
};


export type Subscription_Root_Enumtable_User_Club_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Enumtable_User_Club_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Enumtable_User_Club_Role_Order_By>>;
  where?: InputMaybe<_Enumtable_User_Club_Role_Bool_Exp>;
};


export type Subscription_Root_Enumtable_User_Club_Role_By_PkArgs = {
  role: Scalars['String']['input'];
};


export type Subscription_Root_Enumtable_User_Club_Role_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<_Enumtable_User_Club_Role_Stream_Cursor_Input>>;
  where?: InputMaybe<_Enumtable_User_Club_Role_Bool_Exp>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequests_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProviders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRefreshTokenTypes_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String']['input'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProviders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBuckets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootCatchesArgs = {
  distinct_on?: InputMaybe<Array<Catches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Catches_Order_By>>;
  where?: InputMaybe<Catches_Bool_Exp>;
};


export type Subscription_RootCatches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Catches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Catches_Order_By>>;
  where?: InputMaybe<Catches_Bool_Exp>;
};


export type Subscription_RootCatches_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCatches_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Catches_Stream_Cursor_Input>>;
  where?: InputMaybe<Catches_Bool_Exp>;
};


export type Subscription_RootClub_DocumentsArgs = {
  distinct_on?: InputMaybe<Array<Club_Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Documents_Order_By>>;
  where?: InputMaybe<Club_Documents_Bool_Exp>;
};


export type Subscription_RootClub_Documents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Documents_Order_By>>;
  where?: InputMaybe<Club_Documents_Bool_Exp>;
};


export type Subscription_RootClub_Documents_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClub_Documents_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Club_Documents_Stream_Cursor_Input>>;
  where?: InputMaybe<Club_Documents_Bool_Exp>;
};


export type Subscription_RootClub_FeedArgs = {
  distinct_on?: InputMaybe<Array<Club_Feed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Feed_Order_By>>;
  where?: InputMaybe<Club_Feed_Bool_Exp>;
};


export type Subscription_RootClub_Feed_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Feed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Feed_Order_By>>;
  where?: InputMaybe<Club_Feed_Bool_Exp>;
};


export type Subscription_RootClub_Feed_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClub_Feed_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Club_Feed_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Feed_Comments_Order_By>>;
  where?: InputMaybe<Club_Feed_Comments_Bool_Exp>;
};


export type Subscription_RootClub_Feed_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Feed_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Feed_Comments_Order_By>>;
  where?: InputMaybe<Club_Feed_Comments_Bool_Exp>;
};


export type Subscription_RootClub_Feed_Comments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClub_Feed_Comments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Club_Feed_Comments_Stream_Cursor_Input>>;
  where?: InputMaybe<Club_Feed_Comments_Bool_Exp>;
};


export type Subscription_RootClub_Feed_Image_MappingArgs = {
  distinct_on?: InputMaybe<Array<Club_Feed_Image_Mapping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Feed_Image_Mapping_Order_By>>;
  where?: InputMaybe<Club_Feed_Image_Mapping_Bool_Exp>;
};


export type Subscription_RootClub_Feed_Image_Mapping_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Feed_Image_Mapping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Feed_Image_Mapping_Order_By>>;
  where?: InputMaybe<Club_Feed_Image_Mapping_Bool_Exp>;
};


export type Subscription_RootClub_Feed_Image_Mapping_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Club_Feed_Image_Mapping_Stream_Cursor_Input>>;
  where?: InputMaybe<Club_Feed_Image_Mapping_Bool_Exp>;
};


export type Subscription_RootClub_Feed_LikesArgs = {
  distinct_on?: InputMaybe<Array<Club_Feed_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Feed_Likes_Order_By>>;
  where?: InputMaybe<Club_Feed_Likes_Bool_Exp>;
};


export type Subscription_RootClub_Feed_Likes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Feed_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Feed_Likes_Order_By>>;
  where?: InputMaybe<Club_Feed_Likes_Bool_Exp>;
};


export type Subscription_RootClub_Feed_Likes_By_PkArgs = {
  reaction_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootClub_Feed_Likes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Club_Feed_Likes_Stream_Cursor_Input>>;
  where?: InputMaybe<Club_Feed_Likes_Bool_Exp>;
};


export type Subscription_RootClub_Feed_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Club_Feed_Stream_Cursor_Input>>;
  where?: InputMaybe<Club_Feed_Bool_Exp>;
};


export type Subscription_RootClub_User_CountsArgs = {
  distinct_on?: InputMaybe<Array<Club_User_Counts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_User_Counts_Order_By>>;
  where?: InputMaybe<Club_User_Counts_Bool_Exp>;
};


export type Subscription_RootClub_User_Counts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_User_Counts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_User_Counts_Order_By>>;
  where?: InputMaybe<Club_User_Counts_Bool_Exp>;
};


export type Subscription_RootClub_User_Counts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Club_User_Counts_Stream_Cursor_Input>>;
  where?: InputMaybe<Club_User_Counts_Bool_Exp>;
};


export type Subscription_RootClub_WatersArgs = {
  distinct_on?: InputMaybe<Array<Club_Waters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Waters_Order_By>>;
  where?: InputMaybe<Club_Waters_Bool_Exp>;
};


export type Subscription_RootClub_Waters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Club_Waters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Club_Waters_Order_By>>;
  where?: InputMaybe<Club_Waters_Bool_Exp>;
};


export type Subscription_RootClub_Waters_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClub_Waters_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Club_Waters_Stream_Cursor_Input>>;
  where?: InputMaybe<Club_Waters_Bool_Exp>;
};


export type Subscription_RootClubsArgs = {
  distinct_on?: InputMaybe<Array<Clubs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clubs_Order_By>>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};


export type Subscription_RootClubs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Clubs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clubs_Order_By>>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};


export type Subscription_RootClubs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClubs_NearbyArgs = {
  args: Clubs_Nearby_Args;
  distinct_on?: InputMaybe<Array<Clubs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clubs_Order_By>>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};


export type Subscription_RootClubs_Nearby_AggregateArgs = {
  args: Clubs_Nearby_Args;
  distinct_on?: InputMaybe<Array<Clubs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clubs_Order_By>>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};


export type Subscription_RootClubs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Clubs_Stream_Cursor_Input>>;
  where?: InputMaybe<Clubs_Bool_Exp>;
};


export type Subscription_RootDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Subscription_RootDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Subscription_RootDocuments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDocuments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Documents_Stream_Cursor_Input>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFishing_DaysArgs = {
  distinct_on?: InputMaybe<Array<Fishing_Days_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fishing_Days_Order_By>>;
  where?: InputMaybe<Fishing_Days_Bool_Exp>;
};


export type Subscription_RootFishing_Days_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fishing_Days_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fishing_Days_Order_By>>;
  where?: InputMaybe<Fishing_Days_Bool_Exp>;
};


export type Subscription_RootFishing_Days_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFishing_Days_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Fishing_Days_Stream_Cursor_Input>>;
  where?: InputMaybe<Fishing_Days_Bool_Exp>;
};


export type Subscription_RootReportsArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


export type Subscription_RootReports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


export type Subscription_RootReports_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootReports_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Reports_Stream_Cursor_Input>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Club_RelationArgs = {
  distinct_on?: InputMaybe<Array<User_Club_Relation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Club_Relation_Order_By>>;
  where?: InputMaybe<User_Club_Relation_Bool_Exp>;
};


export type Subscription_RootUser_Club_Relation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Club_Relation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Club_Relation_Order_By>>;
  where?: InputMaybe<User_Club_Relation_Bool_Exp>;
};


export type Subscription_RootUser_Club_Relation_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Club_Relation_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Club_Relation_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Club_Relation_Bool_Exp>;
};


export type Subscription_RootUser_Created_AtArgs = {
  distinct_on?: InputMaybe<Array<User_Created_At_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Created_At_Order_By>>;
  where?: InputMaybe<User_Created_At_Bool_Exp>;
};


export type Subscription_RootUser_Created_At_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Created_At_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Created_At_Order_By>>;
  where?: InputMaybe<User_Created_At_Bool_Exp>;
};


export type Subscription_RootUser_Created_At_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Created_At_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Created_At_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVirusArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootVirus_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Virus_Stream_Cursor_Input>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Subscription_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Subscription_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_club_relation" */
export type User_Club_Relation = {
  __typename?: 'user_club_relation';
  /** An object relationship */
  club: Clubs;
  club_id: Scalars['uuid']['output'];
  /** An object relationship */
  club_user_count_view?: Maybe<Club_User_Counts>;
  id: Scalars['uuid']['output'];
  pending: Scalars['Boolean']['output'];
  role: _Enumtable_User_Club_Role_Enum;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "user_club_relation" */
export type User_Club_Relation_Aggregate = {
  __typename?: 'user_club_relation_aggregate';
  aggregate?: Maybe<User_Club_Relation_Aggregate_Fields>;
  nodes: Array<User_Club_Relation>;
};

export type User_Club_Relation_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<User_Club_Relation_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<User_Club_Relation_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<User_Club_Relation_Aggregate_Bool_Exp_Count>;
};

export type User_Club_Relation_Aggregate_Bool_Exp_Bool_And = {
  arguments: User_Club_Relation_Select_Column_User_Club_Relation_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Club_Relation_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Club_Relation_Aggregate_Bool_Exp_Bool_Or = {
  arguments: User_Club_Relation_Select_Column_User_Club_Relation_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Club_Relation_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Club_Relation_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Club_Relation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Club_Relation_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_club_relation" */
export type User_Club_Relation_Aggregate_Fields = {
  __typename?: 'user_club_relation_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Club_Relation_Max_Fields>;
  min?: Maybe<User_Club_Relation_Min_Fields>;
};


/** aggregate fields of "user_club_relation" */
export type User_Club_Relation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Club_Relation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_club_relation" */
export type User_Club_Relation_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Club_Relation_Max_Order_By>;
  min?: InputMaybe<User_Club_Relation_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_club_relation" */
export type User_Club_Relation_Arr_Rel_Insert_Input = {
  data: Array<User_Club_Relation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Club_Relation_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_club_relation". All fields are combined with a logical 'AND'. */
export type User_Club_Relation_Bool_Exp = {
  _and?: InputMaybe<Array<User_Club_Relation_Bool_Exp>>;
  _not?: InputMaybe<User_Club_Relation_Bool_Exp>;
  _or?: InputMaybe<Array<User_Club_Relation_Bool_Exp>>;
  club?: InputMaybe<Clubs_Bool_Exp>;
  club_id?: InputMaybe<Uuid_Comparison_Exp>;
  club_user_count_view?: InputMaybe<Club_User_Counts_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  pending?: InputMaybe<Boolean_Comparison_Exp>;
  role?: InputMaybe<_Enumtable_User_Club_Role_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_club_relation" */
export enum User_Club_Relation_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserClubRelationPkey = 'user_club_relation_pkey',
  /** unique or primary key constraint on columns "user_id", "club_id" */
  UserClubRelationUserIdClubIdKey = 'user_club_relation_user_id_club_id_key'
}

/** input type for inserting data into table "user_club_relation" */
export type User_Club_Relation_Insert_Input = {
  club?: InputMaybe<Clubs_Obj_Rel_Insert_Input>;
  club_id?: InputMaybe<Scalars['uuid']['input']>;
  club_user_count_view?: InputMaybe<Club_User_Counts_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  pending?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<_Enumtable_User_Club_Role_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Club_Relation_Max_Fields = {
  __typename?: 'user_club_relation_max_fields';
  club_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_club_relation" */
export type User_Club_Relation_Max_Order_By = {
  club_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Club_Relation_Min_Fields = {
  __typename?: 'user_club_relation_min_fields';
  club_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_club_relation" */
export type User_Club_Relation_Min_Order_By = {
  club_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_club_relation" */
export type User_Club_Relation_Mutation_Response = {
  __typename?: 'user_club_relation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Club_Relation>;
};

/** on_conflict condition type for table "user_club_relation" */
export type User_Club_Relation_On_Conflict = {
  constraint: User_Club_Relation_Constraint;
  update_columns?: Array<User_Club_Relation_Update_Column>;
  where?: InputMaybe<User_Club_Relation_Bool_Exp>;
};

/** Ordering options when selecting data from "user_club_relation". */
export type User_Club_Relation_Order_By = {
  club?: InputMaybe<Clubs_Order_By>;
  club_id?: InputMaybe<Order_By>;
  club_user_count_view?: InputMaybe<Club_User_Counts_Order_By>;
  id?: InputMaybe<Order_By>;
  pending?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_club_relation */
export type User_Club_Relation_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_club_relation" */
export enum User_Club_Relation_Select_Column {
  /** column name */
  ClubId = 'club_id',
  /** column name */
  Id = 'id',
  /** column name */
  Pending = 'pending',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'user_id'
}

/** select "user_club_relation_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_club_relation" */
export enum User_Club_Relation_Select_Column_User_Club_Relation_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Pending = 'pending'
}

/** select "user_club_relation_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_club_relation" */
export enum User_Club_Relation_Select_Column_User_Club_Relation_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Pending = 'pending'
}

/** input type for updating data in table "user_club_relation" */
export type User_Club_Relation_Set_Input = {
  club_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  pending?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<_Enumtable_User_Club_Role_Enum>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_club_relation" */
export type User_Club_Relation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Club_Relation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Club_Relation_Stream_Cursor_Value_Input = {
  club_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  pending?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<_Enumtable_User_Club_Role_Enum>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "user_club_relation" */
export enum User_Club_Relation_Update_Column {
  /** column name */
  ClubId = 'club_id',
  /** column name */
  Id = 'id',
  /** column name */
  Pending = 'pending',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'user_id'
}

export type User_Club_Relation_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Club_Relation_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Club_Relation_Bool_Exp;
};

/** Eigene View damit jeder User das Beitrittsdatum aller anderen User sehen kann. Direkt Permission auf die User zu geben ist schwierig, da es zu Permission Konflikten kommt. */
export type User_Created_At = {
  __typename?: 'user_created_at';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "user_created_at" */
export type User_Created_At_Aggregate = {
  __typename?: 'user_created_at_aggregate';
  aggregate?: Maybe<User_Created_At_Aggregate_Fields>;
  nodes: Array<User_Created_At>;
};

/** aggregate fields of "user_created_at" */
export type User_Created_At_Aggregate_Fields = {
  __typename?: 'user_created_at_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Created_At_Max_Fields>;
  min?: Maybe<User_Created_At_Min_Fields>;
};


/** aggregate fields of "user_created_at" */
export type User_Created_At_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Created_At_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_created_at". All fields are combined with a logical 'AND'. */
export type User_Created_At_Bool_Exp = {
  _and?: InputMaybe<Array<User_Created_At_Bool_Exp>>;
  _not?: InputMaybe<User_Created_At_Bool_Exp>;
  _or?: InputMaybe<Array<User_Created_At_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "user_created_at" */
export type User_Created_At_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Created_At_Max_Fields = {
  __typename?: 'user_created_at_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type User_Created_At_Min_Fields = {
  __typename?: 'user_created_at_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "user_created_at" */
export type User_Created_At_Mutation_Response = {
  __typename?: 'user_created_at_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Created_At>;
};

/** Ordering options when selecting data from "user_created_at". */
export type User_Created_At_Order_By = {
  created_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "user_created_at" */
export enum User_Created_At_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_created_at" */
export type User_Created_At_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_created_at" */
export type User_Created_At_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Created_At_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Created_At_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

export type User_Created_At_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Created_At_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Created_At_Bool_Exp;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole: Scalars['String']['output'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean']['output'];
  displayName: Scalars['String']['output'];
  /** An array relationship */
  documents: Array<Documents>;
  /** An aggregate relationship */
  documents_aggregate: Documents_Aggregate;
  email?: Maybe<Scalars['citext']['output']>;
  emailVerified: Scalars['Boolean']['output'];
  id: Scalars['uuid']['output'];
  isAnonymous: Scalars['Boolean']['output'];
  /** A computed field, executes function "user_is_verified" */
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale: Scalars['String']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt: Scalars['timestamptz']['output'];
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberVerified: Scalars['Boolean']['output'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>;
  /** An aggregate relationship */
  securityKeys_aggregate: AuthUserSecurityKeys_Aggregate;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt: Scalars['timestamptz']['output'];
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  documents?: InputMaybe<Documents_Bool_Exp>;
  documents_aggregate?: InputMaybe<Documents_Aggregate_Bool_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  isVerified?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Documents_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  documents_aggregate?: InputMaybe<Documents_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  isVerified?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _eq?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _gt?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _gte?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['uuid']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _lte?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _neq?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['uuid']['input']>>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "storage.virus" */
export type Virus = {
  __typename?: 'virus';
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  file: Files;
  fileId: Scalars['uuid']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  userSession: Scalars['jsonb']['output'];
  virus: Scalars['String']['output'];
};


/** columns and relationships of "storage.virus" */
export type VirusUserSessionArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "storage.virus" */
export type Virus_Aggregate = {
  __typename?: 'virus_aggregate';
  aggregate?: Maybe<Virus_Aggregate_Fields>;
  nodes: Array<Virus>;
};

/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_Fields = {
  __typename?: 'virus_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Virus_Max_Fields>;
  min?: Maybe<Virus_Min_Fields>;
};


/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Virus_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Virus_Append_Input = {
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "storage.virus". All fields are combined with a logical 'AND'. */
export type Virus_Bool_Exp = {
  _and?: InputMaybe<Array<Virus_Bool_Exp>>;
  _not?: InputMaybe<Virus_Bool_Exp>;
  _or?: InputMaybe<Array<Virus_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  file?: InputMaybe<Files_Bool_Exp>;
  fileId?: InputMaybe<Uuid_Comparison_Exp>;
  filename?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userSession?: InputMaybe<Jsonb_Comparison_Exp>;
  virus?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.virus" */
export enum Virus_Constraint {
  /** unique or primary key constraint on columns "id" */
  VirusPkey = 'virus_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Virus_Delete_At_Path_Input = {
  userSession?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Virus_Delete_Elem_Input = {
  userSession?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Virus_Delete_Key_Input = {
  userSession?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "storage.virus" */
export type Virus_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Virus_Max_Fields = {
  __typename?: 'virus_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  virus?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Virus_Min_Fields = {
  __typename?: 'virus_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  virus?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "storage.virus" */
export type Virus_Mutation_Response = {
  __typename?: 'virus_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Virus>;
};

/** on_conflict condition type for table "storage.virus" */
export type Virus_On_Conflict = {
  constraint: Virus_Constraint;
  update_columns?: Array<Virus_Update_Column>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.virus". */
export type Virus_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  file?: InputMaybe<Files_Order_By>;
  fileId?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userSession?: InputMaybe<Order_By>;
  virus?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.virus */
export type Virus_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Virus_Prepend_Input = {
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "storage.virus" */
export enum Virus_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserSession = 'userSession',
  /** column name */
  Virus = 'virus'
}

/** input type for updating data in table "storage.virus" */
export type Virus_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "virus" */
export type Virus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Virus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Virus_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "storage.virus" */
export enum Virus_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserSession = 'userSession',
  /** column name */
  Virus = 'virus'
}

export type Virus_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Virus_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Virus_Set_Input>;
  /** filter the rows which have to be updated */
  where: Virus_Bool_Exp;
};

export type AcceptNewJoinerMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  clubId: Scalars['uuid']['input'];
}>;


export type AcceptNewJoinerMutation = { __typename?: 'mutation_root', update_user_club_relation?: { __typename?: 'user_club_relation_mutation_response', returning: Array<{ __typename?: 'user_club_relation', id: string }> } | null };

export type DeleteUserClubRelationMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  clubId: Scalars['uuid']['input'];
}>;


export type DeleteUserClubRelationMutation = { __typename?: 'mutation_root', delete_user_club_relation?: { __typename?: 'user_club_relation_mutation_response', returning: Array<{ __typename?: 'user_club_relation', id: string }> } | null };

export type UpdateUserRoleMutationVariables = Exact<{
  role: _Enumtable_User_Club_Role_Enum;
  userId: Scalars['uuid']['input'];
}>;


export type UpdateUserRoleMutation = { __typename?: 'mutation_root', update_user_club_relation?: { __typename?: 'user_club_relation_mutation_response', returning: Array<{ __typename?: 'user_club_relation', id: string }> } | null };

export type GetClubUsersQueryVariables = Exact<{
  clubId: Scalars['uuid']['input'];
  offset: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
  pending?: InputMaybe<Scalars['Boolean']['input']>;
  search: Scalars['String']['input'];
  orderBy?: InputMaybe<Array<ClubUserOrderByEnum> | ClubUserOrderByEnum>;
}>;


export type GetClubUsersQuery = { __typename?: 'query_root', getClubUsers: { __typename?: 'GetClubMembersOutput', user_club_relation: Array<{ __typename?: 'UserClubRelation', role: string, user: { __typename?: 'User', id: string, avatarUrl: string, displayName: string, email: string, lastSeen: string } }>, user_club_relation_aggregate: { __typename?: 'UserClubRelationAggregate', aggregate: { __typename?: 'Aggregate', count: number } } } };

export type GetClubsForUserQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetClubsForUserQuery = { __typename?: 'query_root', user_club_relation: Array<{ __typename?: 'user_club_relation', club: { __typename?: 'clubs', id: string, name: string } }> };

export type GetAdminRoleQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type GetAdminRoleQuery = { __typename?: 'query_root', user_club_relation: Array<{ __typename?: 'user_club_relation', role: _Enumtable_User_Club_Role_Enum }> };

export type GetUserByIdQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', avatarUrl: string, displayName: string, email?: string | null }> };

export type AddWaterToClubMutationVariables = Exact<{
  clubId?: InputMaybe<Scalars['uuid']['input']>;
  geo_json?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddWaterToClubMutation = { __typename?: 'mutation_root', insert_club_waters_one?: { __typename?: 'club_waters', id: string } | null };

export type AddZoneToWaterMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']['input']>;
  geo_json?: InputMaybe<Scalars['jsonb']['input']>;
}>;


export type AddZoneToWaterMutation = { __typename?: 'mutation_root', update_club_waters_by_pk?: { __typename?: 'club_waters', id: string } | null };

export type UpdateWaterMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  draft: Scalars['Boolean']['input'];
  members_only: Scalars['Boolean']['input'];
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  fish_types?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type UpdateWaterMutation = { __typename?: 'mutation_root', update_club_waters_by_pk?: { __typename?: 'club_waters', id: string, name: string, description?: string | null, draft: boolean, members_only: boolean, image_id?: string | null, fish_types: Array<string> } | null };

export type GetWatersByClubIdQueryVariables = Exact<{
  club_id: Scalars['uuid']['input'];
}>;


export type GetWatersByClubIdQuery = { __typename?: 'query_root', club_waters: Array<{ __typename?: 'club_waters', id: string, name: string, draft: boolean, members_only: boolean, image_id?: string | null, geo_json: Record<string, unknown> | Array<unknown>, fish_types: Array<string>, description?: string | null }> };

export type GetWaterByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetWaterByIdQuery = { __typename?: 'query_root', club_waters_by_pk?: { __typename?: 'club_waters', id: string, name: string, draft: boolean, members_only: boolean, image_id?: string | null, geo_json: Record<string, unknown> | Array<unknown>, description?: string | null, fish_types: Array<string> } | null };


export const AcceptNewJoinerDocument = gql`
    mutation AcceptNewJoiner($userId: uuid!, $clubId: uuid!) {
  update_user_club_relation(
    where: {user_id: {_eq: $userId}, club_id: {_eq: $clubId}}
    _set: {pending: false}
  ) {
    returning {
      id
    }
  }
}
    `;
export const DeleteUserClubRelationDocument = gql`
    mutation DeleteUserClubRelation($userId: uuid!, $clubId: uuid!) {
  delete_user_club_relation(
    where: {club_id: {_eq: $clubId}, user_id: {_eq: $userId}}
  ) {
    returning {
      id
    }
  }
}
    `;
export const UpdateUserRoleDocument = gql`
    mutation UpdateUserRole($role: _enumtable_user_club_role_enum!, $userId: uuid!) {
  update_user_club_relation(where: {user_id: {_eq: $userId}}, _set: {role: $role}) {
    returning {
      id
    }
  }
}
    `;
export const GetClubUsersDocument = gql`
    query GetClubUsers($clubId: uuid!, $offset: Int!, $limit: Int!, $pending: Boolean, $search: String!, $orderBy: [ClubUserOrderByEnum!]) {
  getClubUsers(
    clubId: $clubId
    offset: $offset
    limit: $limit
    pending: $pending
    search: $search
    orderBy: $orderBy
  ) {
    user_club_relation {
      role
      user {
        id
        avatarUrl
        displayName
        email
        lastSeen
      }
    }
    user_club_relation_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;
export const GetClubsForUserDocument = gql`
    query GetClubsForUser($userId: uuid!) {
  user_club_relation(where: {user_id: {_eq: $userId}}) {
    club {
      id
      name
    }
  }
}
    `;
export const GetAdminRoleDocument = gql`
    query GetAdminRole($userId: uuid = "") {
  user_club_relation(where: {role: {_eq: ADMIN}, user_id: {_eq: $userId}}) {
    role
  }
}
    `;
export const GetUserByIdDocument = gql`
    query GetUserById($userId: uuid!) {
  users(where: {id: {_eq: $userId}}) {
    avatarUrl
    displayName
    email
  }
}
    `;
export const AddWaterToClubDocument = gql`
    mutation AddWaterToClub($clubId: uuid = "", $geo_json: jsonb = "", $name: String = "") {
  insert_club_waters_one(
    object: {club_id: $clubId, geo_json: $geo_json, name: $name, draft: true, fish_types: []}
  ) {
    id
  }
}
    `;
export const AddZoneToWaterDocument = gql`
    mutation AddZoneToWater($id: uuid = "", $geo_json: jsonb = "") {
  update_club_waters_by_pk(pk_columns: {id: $id}, _set: {geo_json: $geo_json}) {
    id
  }
}
    `;
export const UpdateWaterDocument = gql`
    mutation UpdateWater($id: uuid!, $name: String!, $description: String, $draft: Boolean!, $members_only: Boolean!, $image_id: uuid, $fish_types: [String!]) {
  update_club_waters_by_pk(
    pk_columns: {id: $id}
    _set: {name: $name, description: $description, draft: $draft, members_only: $members_only, image_id: $image_id, fish_types: $fish_types}
  ) {
    id
    name
    description
    draft
    members_only
    image_id
    fish_types
  }
}
    `;
export const GetWatersByClubIdDocument = gql`
    query GetWatersByClubId($club_id: uuid!) {
  club_waters(where: {club_id: {_eq: $club_id}}) {
    id
    name
    draft
    members_only
    image_id
    geo_json
    fish_types
    description
  }
}
    `;
export const GetWaterByIdDocument = gql`
    query GetWaterById($id: uuid!) {
  club_waters_by_pk(id: $id) {
    id
    name
    draft
    members_only
    image_id
    geo_json
    description
    fish_types
  }
}
    `;
export type Requester<C = {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    AcceptNewJoiner(variables: AcceptNewJoinerMutationVariables, options?: C): Promise<AcceptNewJoinerMutation> {
      return requester<AcceptNewJoinerMutation, AcceptNewJoinerMutationVariables>(AcceptNewJoinerDocument, variables, options) as Promise<AcceptNewJoinerMutation>;
    },
    DeleteUserClubRelation(variables: DeleteUserClubRelationMutationVariables, options?: C): Promise<DeleteUserClubRelationMutation> {
      return requester<DeleteUserClubRelationMutation, DeleteUserClubRelationMutationVariables>(DeleteUserClubRelationDocument, variables, options) as Promise<DeleteUserClubRelationMutation>;
    },
    UpdateUserRole(variables: UpdateUserRoleMutationVariables, options?: C): Promise<UpdateUserRoleMutation> {
      return requester<UpdateUserRoleMutation, UpdateUserRoleMutationVariables>(UpdateUserRoleDocument, variables, options) as Promise<UpdateUserRoleMutation>;
    },
    GetClubUsers(variables: GetClubUsersQueryVariables, options?: C): Promise<GetClubUsersQuery> {
      return requester<GetClubUsersQuery, GetClubUsersQueryVariables>(GetClubUsersDocument, variables, options) as Promise<GetClubUsersQuery>;
    },
    GetClubsForUser(variables: GetClubsForUserQueryVariables, options?: C): Promise<GetClubsForUserQuery> {
      return requester<GetClubsForUserQuery, GetClubsForUserQueryVariables>(GetClubsForUserDocument, variables, options) as Promise<GetClubsForUserQuery>;
    },
    GetAdminRole(variables?: GetAdminRoleQueryVariables, options?: C): Promise<GetAdminRoleQuery> {
      return requester<GetAdminRoleQuery, GetAdminRoleQueryVariables>(GetAdminRoleDocument, variables, options) as Promise<GetAdminRoleQuery>;
    },
    GetUserById(variables: GetUserByIdQueryVariables, options?: C): Promise<GetUserByIdQuery> {
      return requester<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, variables, options) as Promise<GetUserByIdQuery>;
    },
    AddWaterToClub(variables?: AddWaterToClubMutationVariables, options?: C): Promise<AddWaterToClubMutation> {
      return requester<AddWaterToClubMutation, AddWaterToClubMutationVariables>(AddWaterToClubDocument, variables, options) as Promise<AddWaterToClubMutation>;
    },
    AddZoneToWater(variables?: AddZoneToWaterMutationVariables, options?: C): Promise<AddZoneToWaterMutation> {
      return requester<AddZoneToWaterMutation, AddZoneToWaterMutationVariables>(AddZoneToWaterDocument, variables, options) as Promise<AddZoneToWaterMutation>;
    },
    UpdateWater(variables: UpdateWaterMutationVariables, options?: C): Promise<UpdateWaterMutation> {
      return requester<UpdateWaterMutation, UpdateWaterMutationVariables>(UpdateWaterDocument, variables, options) as Promise<UpdateWaterMutation>;
    },
    GetWatersByClubId(variables: GetWatersByClubIdQueryVariables, options?: C): Promise<GetWatersByClubIdQuery> {
      return requester<GetWatersByClubIdQuery, GetWatersByClubIdQueryVariables>(GetWatersByClubIdDocument, variables, options) as Promise<GetWatersByClubIdQuery>;
    },
    GetWaterById(variables: GetWaterByIdQueryVariables, options?: C): Promise<GetWaterByIdQuery> {
      return requester<GetWaterByIdQuery, GetWaterByIdQueryVariables>(GetWaterByIdDocument, variables, options) as Promise<GetWaterByIdQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;