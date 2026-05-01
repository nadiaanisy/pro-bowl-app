import { useTranslation } from 'react-i18next';

export default function FirebaseAuthErrorMessage(code: string) {
  const { t } = useTranslation();
  
  switch (code) {
    case "auth/email-already-in-use":
      return t("ERROR.EMAIL_IN_USE");
    case "auth/invalid-email":
      return t("ERROR.INVALID_EMAIL");
    case "auth/weak-password":
      return t("ERROR.WEAK_PASSWORD");
    default:
      return t("ERROR.GENERIC");
  }
};