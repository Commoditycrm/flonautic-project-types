export var ExternalFileType;
(function (ExternalFileType) {
    ExternalFileType["Image"] = "IMAGE";
    ExternalFileType["Pdf"] = "PDF";
    ExternalFileType["Doc"] = "DOC";
    ExternalFileType["Text"] = "TEXT";
    ExternalFileType["Other"] = "OTHER";
})(ExternalFileType || (ExternalFileType = {}));
export var ResourceImplementation;
(function (ResourceImplementation) {
    ResourceImplementation["Human"] = "Human";
    ResourceImplementation["Contact"] = "Contact";
    ResourceImplementation["Asset"] = "Asset";
    ResourceImplementation["Account"] = "Account";
})(ResourceImplementation || (ResourceImplementation = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["HumanResources"] = "HUMAN_RESOURCES";
    ResourceType["Contacts"] = "CONTACTS";
    ResourceType["Assets"] = "ASSETS";
    ResourceType["Accounts"] = "ACCOUNTS";
})(ResourceType || (ResourceType = {}));
export var SoftDeletableImplementation;
(function (SoftDeletableImplementation) {
    SoftDeletableImplementation["Organization"] = "Organization";
    SoftDeletableImplementation["Project"] = "Project";
    SoftDeletableImplementation["Folder"] = "Folder";
    SoftDeletableImplementation["File"] = "File";
    SoftDeletableImplementation["FlowNode"] = "FlowNode";
    SoftDeletableImplementation["BacklogItem"] = "BacklogItem";
})(SoftDeletableImplementation || (SoftDeletableImplementation = {}));
/** An enum for sorting in either ascending or descending order. */
export var SortDirection;
(function (SortDirection) {
    /** Sort by field values in ascending order. */
    SortDirection["Asc"] = "ASC";
    /** Sort by field values in descending order. */
    SortDirection["Desc"] = "DESC";
})(SortDirection || (SortDirection = {}));
export var TimestampedCreatableImplementation;
(function (TimestampedCreatableImplementation) {
    TimestampedCreatableImplementation["Organization"] = "Organization";
    TimestampedCreatableImplementation["Folder"] = "Folder";
    TimestampedCreatableImplementation["File"] = "File";
    TimestampedCreatableImplementation["FlowNode"] = "FlowNode";
    TimestampedCreatableImplementation["Link"] = "Link";
    TimestampedCreatableImplementation["BacklogItem"] = "BacklogItem";
    TimestampedCreatableImplementation["Comment"] = "Comment";
    TimestampedCreatableImplementation["Sprint"] = "Sprint";
    TimestampedCreatableImplementation["ExternalFile"] = "ExternalFile";
})(TimestampedCreatableImplementation || (TimestampedCreatableImplementation = {}));
export var TimestampedImplementation;
(function (TimestampedImplementation) {
    TimestampedImplementation["User"] = "User";
    TimestampedImplementation["Organization"] = "Organization";
    TimestampedImplementation["Human"] = "Human";
    TimestampedImplementation["Contact"] = "Contact";
    TimestampedImplementation["Asset"] = "Asset";
    TimestampedImplementation["Account"] = "Account";
    TimestampedImplementation["Folder"] = "Folder";
    TimestampedImplementation["File"] = "File";
    TimestampedImplementation["FlowNode"] = "FlowNode";
    TimestampedImplementation["Link"] = "Link";
    TimestampedImplementation["BacklogItem"] = "BacklogItem";
    TimestampedImplementation["Comment"] = "Comment";
    TimestampedImplementation["Sprint"] = "Sprint";
    TimestampedImplementation["ExternalFile"] = "ExternalFile";
})(TimestampedImplementation || (TimestampedImplementation = {}));
export var UserRole;
(function (UserRole) {
    UserRole["CompanyAdmin"] = "COMPANY_ADMIN";
    UserRole["SuperUser"] = "SUPER_USER";
    UserRole["User"] = "USER";
    UserRole["SystemAdmin"] = "SYSTEM_ADMIN";
})(UserRole || (UserRole = {}));
