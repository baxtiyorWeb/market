import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "../exports/api"; // Adjust the import if needed

const useUploadImage = (setisUpload, setFileSaveId, setFileListId) => {
  return useMutation({
    mutationKey: ["file/upload"],
    mutationFn: async (file) => {
      try {
        setisUpload(true);
        console.log(file);
        // Create FormData object
        const formData = new FormData();
        formData.append("img", file);

        console.log(formData);
        // Upload file
        const response = await uploadFile(formData);
        // Check if the response is valid
        if (response?.data?.id) {
          const fileId = response.data.id;

          // Update file states
          setFileSaveId((prev) => [...prev, { id: fileId }]);
          setFileListId((prev) => [
            ...prev,
            {
              id: fileId,
              fileItemId: fileId,
              mainFile: prev.length === 0,
            },
          ]);
        }

        return response;
      } catch (error) {
        // Handle error
        console.error("File upload failed:", error);
        throw error; // Re-throw error to trigger `onError`
      } finally {
        // Always set upload state to false
        setisUpload(false);
      }
    },
    onError: (error) => {
      console.error("Error during file upload:", error);
    },
  });
};

export default useUploadImage;
