export type BasicInformation = {
    clientName: string;
    businessName: string;
    pan: string;
    email?: string;
    phone?: string;
  };
  
  export type GSTInformation = {
    gstin?: string;
    gstType?: string;
    state?: string;
  };
  
  export type AddressDetails = {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    pincode?: string;
  };
  
  export type BillingSettings = {
    billingCycle?: string;
    creditLimit?: number;
  };
  
  export type AccessPermissions = {
    canViewReports?: boolean;
    canApprove?: boolean;
    canDownload?: boolean;
  };
  
  export type AdditionalSettings = {
    remarks?: string;
    tags?: string[];
  };
  
  export type DocumentUpload = {
    registrationCertificate?: FileList;
    panDocument?: FileList;
  };
  
  export type ComplianceTracker = {
    lastVerified?: string;
    nextReviewDate?: string;
  };
  
  export type IntegrationSettings = {
    apiKey?: string;
    webhookUrl?: string;
  };
  
  export type ClientFormData = BasicInformation &
    GSTInformation &
    AddressDetails &
    BillingSettings &
    AccessPermissions &
    AdditionalSettings &
    DocumentUpload &
    ComplianceTracker &
    IntegrationSettings;
  