//import { createSchema, Type, typedModel } from 'ts-mongoose'
import { prop, getModelForClass } from '@typegoose/typegoose';
 
// const MemberSchema = createSchema({
//     parentId: Type.string(),
//     email: Type.string({ unique: true, lowercase: true, trim: true, required: true }),
//     username: Type.string({ unique: true, lowercase: true, required: true }),
//     password: Type.string({ required: true }),
//     salt: Type.string({ required: true }),
//     firstName: Type.string({ required: true, trim: true }),
//     lastName: Type.string({ required: true, trim: true }),
//     active: Type.boolean(),
//     registrationDate: Type.date(),
//     resetPasswordKey: Type.string()
// })

// const Member = typedModel('member', MemberSchema)
// export { Member, MemberSchema }

class Member {
  @prop({ required: true })
  public parentId!: string;

  @prop({ unique: true, lowercase: true, trim: true, required: true })
  public email!: string;

  @prop({ unique: true, lowercase: true, required: true })
  public username!: string;

  @prop({ required: true })
  public password!: string;

  @prop({ required: true })
  public salt!: string;

  @prop({ required: true, trim: true })
  public firstName!: string;

  @prop({ required: true, trim: true })
  public lastName!: string;

  @prop()
  public active?: boolean;

  @prop()
  public registrationDate?: Date;

  @prop()
  public resetPasswordKey?: string;
}

const MemberModel = getModelForClass(Member);

export { MemberModel as Member };