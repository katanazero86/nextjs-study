import BasicInput from '@/components/atoms/Inputs/BasicInput/BasicInput';
import TransparentButton from '@/components/atoms/Buttons/TransparentButton/TransparentButton';

export default function Comment() {
  return (
    <>
      <BasicInput
        block
        size="sm"
        placeholder="Add a comment..."
        value=""
        onChange={(e) => console.log(e.target.value)}
      />
      <TransparentButton onClick={() => alert('준비중')}>댓글 달기</TransparentButton>
    </>
  );
}
