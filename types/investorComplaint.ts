export interface InvestorComplaintHistory {

    _id: string;

    title: string;

    fileName: string;

    fileUrl: string;

    publicId: string;

    fileSize: number;

    mimeType: string;

    version: number;

    status: "ACTIVE" | "INACTIVE";

    createdAt: string;

    updatedAt: string;

    uploadedBy: {

        _id: string;

        firstName: string;

        lastName: string;

        email: string;

    };

    updatedBy: {

        _id: string;

        firstName: string;

        lastName: string;

        email: string;

    } | null;

}